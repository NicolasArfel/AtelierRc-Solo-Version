// i import the datamapper
const projectDatamapper = require('../models/projectDatamapper');

const projectController = {
  /**
    * Project controller to get all the projects
    * @param {*} _ Express req.object (not used)
    * @param {*} res Express response object
    * @returns Route API JSON response with the projects
    */

  async getAllProjects(_, res) {
    try {
      const projects = await projectDatamapper.findAll();
      return res.json(projects);
    } catch (err) {
      console.trace(err);
      return res.status(500).json(err.tostring());
    }
  },

  async findAllProjects(_, res) {
    try {
      const getAllProjects = await projectDatamapper.findAllProjects();
      return res.json(getAllProjects);
    } catch (err) {
      console.trace(err);
      return res.status(500).json(err.toString());
    }
  },

  async getOne(req, res) {
    const project = await projectDatamapper.findByPk(req.params.id);

    if (!project) {
      res.status(404).send('error: the project you are lookinf for does not exists');
    }
    return res.json(project);
  },
};

// i export the module so i can use it into the router
module.exports = projectController;
