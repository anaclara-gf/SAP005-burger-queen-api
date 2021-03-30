const bcrypt = require ('bcrypt');
const UserServices = require('../services/UserServices');
const { ErrorHandler } = require('../utils/error');

const UserController = {
  async getUsers(req,res) {
    try {
      const listUsers = await UserServices.listUsers();
      const listUsersOrganized = listUsers.map(user => {
        return {
          "id": user.id,
          "name": user.name,
          "email": user.email,
          "role": user.role,
          "restaurant": user.restaurant
        }
      })
      res.status(200).json(listUsersOrganized);
    } catch (error) {
      res.status(400).json(error)
    } 
  },

  async getUserId(req,res,next) {
    try {
      const userId = parseInt(req.params.userId);
      const listUserId = await UserServices.listUserId(userId);
      if(!listUserId.length){
        throw new ErrorHandler(404, "product not found!");
      }
      const listUserIdOrganized = {
        "id": listUserId.id,
        "name": listUserId.name,
        "email": listUserId.email,
        "role": listUserId.role,
        "restaurant": listUserId.restaurant
      }
      res.status(200).json(listUserIdOrganized);
    } catch (error) {
      next(error);
    }
  },

  async createUsers(req,res,next) {
    try {
      if(Object.keys(req.body).length === 0){
        throw new ErrorHandler(400, "body is empty!");
      }
      const user = {
        name: req.body.name,
        role: req.body.role,
        restaurant: req.body.restaurant,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
      };
      const createdUser = await UserServices.createUser(user);
      const createdUserOrganized = {
        "id": createdUser.id,
        "name": createdUser.name,
        "email": createdUser.email,
        "role": createdUser.role,
        "restaurant": createdUser.restaurant,
        "createdAt": createdUser.createdAt
      }
      res.status(201).json(createdUserOrganized);
    } catch (error) {
      next(error);
    }
  },

  async updateUsers(req,res,next) {
    try {
      if(Object.keys(req.body).length === 0){
        throw new ErrorHandler(400, "body is empty!");
      }
      const userId = parseInt(req.params.userId);
      const oldUser = await UserServices.listUserId(userId);
      if(!oldUser.length){
        throw new ErrorHandler(404, "product not found!");
      }
      userToUpdate = {
        "id": userId,
        "name": req.body.name ? req.body.name : oldUser.name,
        "email": req.body.email ? req.body.email : oldUser.email,
        "password": req.body.password ? bcrypt.hashSync(req.body.password, 10) : oldUser.password,
        "role": req.body.role ? req.body.role : oldUser.role,
        "restaurant": req.body.restaurant ? req.body.restaurant : oldUser.restaurant
      }
      await UserServices.updateUserName(userId, userToUpdate);
      const listUserId = await UserServices.listUserId(userId);
      const listUserIdOrganized = {
        "id": listUserId.id,
        "name": listUserId.name,
        "email": listUserId.email,
        "role": listUserId.role,
        "restaurant": listUserId.restaurant,
        "updatedAt": listUserId.updatedAt
      }
      res.status(200).json(listUserIdOrganized); 
      
    } catch (error) {
      next(error);
    }
  },

  async deleteUsers(req,res,next) {
    try {
      const userId = parseInt(req.params.userId);
      const searchUser = await UserServices.listUserId(userId);
      if(!searchUser.length){
        throw new ErrorHandler(404, "product not found!");
      }
      await UserServices.deleteUser(userId);
      res.status(200).json('User was deleted successfully');
    } catch (error) {
      next(error);
    }
  },
}

module.exports = UserController