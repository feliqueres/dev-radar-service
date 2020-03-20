const axios = require("axios");
const Dev = require("../models/Dev");
const parseStringAsArray = require("../utils/ParseStringAsArray");

module.exports = {
  async index(request, response) {
    return response.json(await Dev.find());
  },

  async store(request, response) {
    console.log(request.body);

    const { github_username, techs, latitude, longitude } = request.body;

    let dev = await Dev.findOne({ github_username });

    if (!dev) {
      const api_response = await axios.get(
        `https://api.github.com/users/${github_username}`
      );

      const { name = login, avatar_url, bio } = api_response.data;
      const techsArray = parseStringAsArray(techs);

      const location = {
        type: "Point",
        coordinates: [longitude, latitude]
      };

      dev = await Dev.create({
        name,
        github_username,
        bio,
        avatar_url,
        techs: techsArray,
        location
      });
    }
    return response.json(dev);
  },
  async destroy(request, response) {
    const id = request.params.id;
    await Dev.deleteOne({ _id: id });
    return response.status(204);
  },
  async update(request, response) {},
  async find(request, response) {
    return response.json(await Dev.find({ _id: request.params.id }));
  }
};
