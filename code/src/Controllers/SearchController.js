const Dev = require("../models/Dev");
const parseStringAsArray = require("../utils/ParseStringAsArray");

module.exports = {
  async index(request, response) {
    const { latitude, longitude, techs } = request.query;
    console.log("techs: " + techs);
    const techsArray = parseStringAsArray(techs);
    console.log("techsArray: " + techsArray);

    if (techsArray) {
      console.log(techsArray.length);
    }

    const devs = await Dev.find({
      techs: {
        $in: techsArray
      },
      location: {
        $near: {
          $geometry: { type: "Point", coordinates: [longitude, latitude] },
          $maxDistance: 10000
        }
      }
    });
    response.json({ devs });
  }
};
