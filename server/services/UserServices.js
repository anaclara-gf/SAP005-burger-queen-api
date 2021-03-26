const database = require('../db/models')

const UserServices = {
    async listUser() {
        return await database.User.findAll();
    },

    async listUserId(userId) {
        return await database.User.findOne(
            {where: {id: userId}}
        );
    },

    async createUser(userData) {
        return await database.User.create(userData);
    },

    async updateUserName(userId, userToUpdate) {
        return await database.User.update(
            userToUpdate,
            {where: {id: userId}}
        );
    },

    async deleteUser(userId) {
        return await database.User.destroy(
            {where: {id: userId}}
        );
    },
}

module.exports = UserServices