const {getContact, getContacts} = require("../controllers/contactsController");
const contactRouter = require("express").Router();

contactRouter.get('/contacts', getContacts);
contactRouter.get('/contacts/:id',getContact );


module.exports = contactRouter;