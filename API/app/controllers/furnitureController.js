const furnitureDatamapper = require('../models/furnitureDatamapper');

const furnitureController = {

  async getAllFurnitures(_, res) {
    try {
      const furnitures = await furnitureDatamapper.findAll();
      return res.json(furnitures);
    } catch (err) {
      console.trace(err);
      return res.status(500).json(err.tostring());
    }
  },

  async getOneFurniture(req, res) {
    const furniture = await furnitureDatamapper.findByPk(req.params.id);

    if (!furniture) {
      res.status(404).send('error: the furniture you are looking for does not exists');
    }
    return res.json(furniture);
  },

};

module.exports = furnitureController;
