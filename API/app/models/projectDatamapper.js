// i import database
const client = require('../config/db');

// /**
//  * @typedef {Object} InputData
//  * @property {number} id - Unique identifyer of the table
//  */

const projectDatamapper = {
  /**
     * Get all the project without filter nore order
     * @returns all the projects from the database
     */

  async findAll() {
    //   i want a request to find evry project and the cover photo
    const result = await client.query(
      'SELECT project.name AS project_name, project_photo.name AS photo_name, * FROM "project" INNER JOIN project_photo ON project_photo.project_id = project.id WHERE cover_photo = true',
    );
    return result.rows;
  },

  async findAllProjects() {
    //   i need to find all the projects
    const result = await client.query(
      'SELECT project.name AS project_name, * FROM "project"',
    );
    return result.rows;
  },

  /**
     * Get the project by his id
     * @param {number} id - the id the selected project
     * @returns the selected project or undefined if no project has this category
     */
  async findByPk(id) {
    //    i need to find the project with the good id
    const preparedQuery = {
      text: 'SELECT project.name AS project_name, project_photo.name AS photo_name, * FROM "project" INNER JOIN project_photo ON project_photo.project_id = project.id WHERE project_id = $1 ORDER BY project_photo.position',
      values: [id],
    };
    const result = await client.query(preparedQuery);

    if (result.rowCount === 0) {
      return null;
    }
    return result.rows;
  },
};

module.exports = projectDatamapper;
