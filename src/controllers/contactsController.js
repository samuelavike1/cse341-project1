const {getAllContacts, getContactById} = require("../services/contactService");

async function getContacts(req, res)  {
    const users = await getAllContacts();
    res.json(users);
}

async function getContact(req, res) {
    try {
        const user = await getContactById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}


module.exports = { getContacts, getContact };