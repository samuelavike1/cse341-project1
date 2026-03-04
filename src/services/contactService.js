const {findById, findAll} = require("../repositories/contactRepository");

async function getAllContacts() {
    return await findAll();
}

async function getContactById(id) {
    const user = await findById(id);
    if (!user) throw new Error(`Contact with id ${id} not found`);
    return user;
}

module.exports = { getAllContacts, getContactById };