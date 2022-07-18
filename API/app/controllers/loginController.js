const bcrypt = require('bcrypt');
const userDatamapper = require('../models/userDatamapper');

const loginController = {

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await userDatamapper.findUser(email);

      if (email !== user.email) {
        res.status(401).json('mot de passe ou identifiant invalide');
      }

      const validPassword = await bcrypt.compare(password, user.password);

      if (!validPassword) {
        res.status(401).json('mot de passe ou identifiant invalide');
      }

      if (user && password) {
        console.log(user);
        const {
          id, email, lastname, firstname, role,
        } = user;
        const newUser = {
          id, email, lastname, firstname, role,
        };
      }
    } catch (err) {
      console.trace(err);
    }
  },
};

module.exports = loginController;
