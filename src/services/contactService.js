const { findAll, findById, create, update, remove } = require('../repositories/contactRepository');

async function getAllContacts() {
    return await findAll();
}

async function getContactById(id) {
    const contact = await findById(id);
    if (!contact) throw new Error(`Contact with id ${id} not found`);
    return contact;
}

async function createContact(contactData) {
    const { firstName, lastName, email, favoriteColor, birthday } = contactData;

    // validate all required fields
    if (!firstName) throw new Error('firstName is required');
    if (!lastName) throw new Error('lastName is required');
    if (!email) throw new Error('email is required');
    if (!favoriteColor) throw new Error('favoriteColor is required');
    if (!birthday) throw new Error('birthday is required');

    return await create({ firstName, lastName, email, favoriteColor, birthday });
}

async function updateContact(id, contactData) {
    // ensure contact exists before updating
    await getContactById(id);

    const { firstName, lastName, email, favoriteColor, birthday } = contactData;

    // validate all required fields
    if (!firstName) throw new Error('firstName is required');
    if (!lastName) throw new Error('lastName is required');
    if (!email) throw new Error('email is required');
    if (!favoriteColor) throw new Error('favoriteColor is required');
    if (!birthday) throw new Error('birthday is required');

    return await update(id, { firstName, lastName, email, favoriteColor, birthday });
}

async function deleteContact(id) {
    // ensure contact exists before deleting
    await getContactById(id);

    const result = await remove(id);

    // deletedCount is 0 if nothing was deleted
    if (result.deletedCount === 0) throw new Error(`Failed to delete contact with id ${id}`);

    return result;
}

module.exports = { getAllContacts, getContactById, createContact, updateContact, deleteContact };