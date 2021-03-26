const bcrypt = require ('bcrypt');
const UserServices = require('../services/UserServices');

const UserController = {
  async getUsers(req, res) {
    try {
      const listUsers = await UserServices.listUser();
      res.status(200).json(listUsers);
    } catch (error) {
      res.status(400).json(error)
    }
  },

  async getUserId(req, res) {
    const userId = parseInt(req.params.userId);
    try {
      const listUserId = await UserServices.listUserId(userId);
      res.status(200).json(listUserId);
    } catch (error) {
      res.status(400).json(error)
    }
  },

  async createUsers(req, res) {
    const user = {
      name: req.body.name,
      role: req.body.role,
      restaurant: req.body.restaurant,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.name, 10),
    };
    try { 
      const createdUser = await UserServices.createUser(user);
      res.status(201).json(createdUser);
    } catch (error) {
      res.status(400).json(error)
    }
  },

  async updateUsers(req, res) {
    const userId = parseInt(req.params.userId);
    const oldUser = await UserServices.listUserId(userId);
    userToUpdate = {
      "id": userId,
      "name": req.body.name ? req.body.name : oldUser.name,
      "email": req.body.email ? req.body.email : oldUser.email,
      "password": req.body.password ? req.body.password : oldUser.password,
      "role": req.body.role ? req.body.role : oldUser.role,
      "restaurant": req.body.restaurant ? req.body.restaurant : oldUser.restaurant
    }
    
    try {
      await UserServices.updateUserName(userId, userToUpdate);
      res.status(200).json(userToUpdate);
    } catch (error) {
      res.status(400).json(error)
    }
  },

  async deleteUsers(req, res) {
    const userId = parseInt(req.params.userId);
    try {
      const deletedUser = await UserServices.deleteUser(userId);
      res.status(200).json('User was deleted successfully');
    } catch (error) {
      res.status(400).json(error)
    }
  },
}

module.exports = UserController