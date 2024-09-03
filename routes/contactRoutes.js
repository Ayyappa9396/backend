const express = require('express');
const router = express.Router();
const {getAllContacts, createContact, updateContact, getContactbyId, deleteContactbyId } = require("../controllers/contactController")


router.route('/').get(getAllContacts)
router.route('/').post(createContact)
router.route('/:id').put(updateContact)
router.route('/:id').get(getContactbyId)
router.route('/:id').delete(deleteContactbyId)

module.exports = router

