// i import database
const client = require('../config/db');

const furnitureDatamapper = {

  async findAll() {
    const result = await client.query(
      'SELECT furniture.name AS furniture_name, * FROM "furniture" INNER JOIN furniture_photo ON furniture_photo.furniture_id = furniture.id WHERE cover_photo = true',
    );
    return result.rows;
  },

  async findByPk(id) {
    const preparedQuery = {
      text: 'SELECT furniture.name AS furniture_name,furniture_photo AS photo_name, * FROM "furniture" INNER JOIN furniture_photo ON furniture_photo.furniture_id = furniture.id WHERE furniture_id = $1 ORDER BY furniture_photo.position',
      values: [id],
    };
    const result = await client.query(preparedQuery);

    if (result.rowCount === 0) {
      return null;
    }
    return result.rows;
  },
};

module.exports = furnitureDatamapper;
