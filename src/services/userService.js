const {findById, findAll} = require("../repositories/userRepository");

async function getAllUsers() {
    return await findAll();
}

async function getUserById(id) {
    const user = await findById(id);
    if (!user) throw new Error(`User with id ${id} not found`);
    return user;
}

module.exports = { getAllUsers, getUserById };