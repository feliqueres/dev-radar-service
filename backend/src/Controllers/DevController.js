const axios = require("axios");
const Dev = require("../models/Dev");

module.exports = {
  async store(request, response) {
    console.log(request.body);

    const { github_username, techs, latitude, longitude } = request.body;

    const api_response = await axios.get(
      `https://api.github.com/users/${github_username}`
    );

    const { name = login, avatar_url, bio } = api_response.data;
    console.log(name, avatar_url, bio, github_username);

    const techsArray = techs.split(",").map(tech => tech.trim());

    const location = {
      type: "Point",
      coordinates: [longitude, latitude]
    };

    const dev = await Dev.create({
      github_username,
      bio,
      avatar_url,
      techs: techsArray,
      location
    });

    return response.json(dev);
  }
};
