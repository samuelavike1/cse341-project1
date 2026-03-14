const {
    getAllContacts,
    getContactById,
    createContact,
    updateContact,
    deleteContact
} = require('../services/contactService');

async function getContacts(req, res) {
    try {
        const contacts = await getAllContacts();
        res.status(200).json(contacts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function getContact(req, res) {
    try {
        const contact = await getContactById(req.params.id);
        res.status(200).json(contact);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

async function createContactHandler(req, res) {
    /*  #swagger.summary = 'Create a new contact'
        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        required: ["firstName", "lastName", "email", "favoriteColor", "birthday"],
                        properties: {
                            firstName:     { type: "string", example: "Samuel" },
                            lastName:      { type: "string", example: "Avike" },
                            email:         { type: "string", example: "samuel@email.com" },
                            favoriteColor: { type: "string", example: "blue" },
                            birthday:      { type: "string", example: "1990-01-01" }
                        }
                    }
                }
            }
        }
        #swagger.responses[201] = {
            description: "Contact created successfully",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            id: { type: "string", example: "64f1a2b3c4d5e6f7a8b9c0d1" }
                        }
                    }
                }
            }
        }
        #swagger.responses[400] = { description: "Missing or invalid fields" }
    */
    try {
        const result = await createContact(req.body);
        res.status(201).json({ id: result.insertedId });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function updateContactHandler(req, res) {
    /*  #swagger.summary = 'Update a contact by ID'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Contact ID',
            required: true,
            type: 'string'
        }
        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        required: ["firstName", "lastName", "email", "favoriteColor", "birthday"],
                        properties: {
                            firstName:     { type: "string", example: "Samuel" },
                            lastName:      { type: "string", example: "Avike" },
                            email:         { type: "string", example: "sammy@byu.com" },
                            favoriteColor: { type: "string", example: "orange" },
                            birthday:      { type: "string", example: "1990-01-01" }
                        }
                    }
                }
            }
        }
        #swagger.responses[204] = { description: "Contact updated successfully" }
        #swagger.responses[404] = { description: "Contact not found" }
        #swagger.responses[400] = { description: "Missing or invalid fields" }
    */
    try {
        await updateContact(req.params.id, req.body);
        res.status(200).json({ message: 'Contact updated successfully' });
    } catch (err) {
        const status = err.message.includes('not found') ? 404 : 400;
        res.status(status).json({ message: err.message });
    }
}

async function deleteContactHandler(req, res) {
    /*  #swagger.summary = 'Delete a contact by ID'
       #swagger.parameters['id'] = {
           in: 'path',
           description: 'Contact ID',
           required: true,
           type: 'string'
       }
       #swagger.responses[204] = { description: "Contact deleted successfully" }
       #swagger.responses[404] = { description: "Contact not found" }
   */
    try {
        await deleteContact(req.params.id);
        res.status(200).json({ message: 'Contact deleted successfully' });
    } catch (err) {
        const status = err.message.includes('not found') ? 404 : 400;
        res.status(status).json({ message: err.message });
    }
}

module.exports = { getContacts, getContact, createContactHandler, updateContactHandler, deleteContactHandler };