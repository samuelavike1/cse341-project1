const router = require('express').Router();
const {
    getContacts,
    getContact,
    createContactHandler,
    updateContactHandler,
    deleteContactHandler
} = require('../controllers/contactsController');

router.get('/contacts', getContacts);
router.get('/contacts/:id', getContact);
router.post('/contacts', createContactHandler);
router.put('/contacts/:id', updateContactHandler);
router.delete('/contacts/:id', deleteContactHandler);

module.exports = router;