const express = require('express');
const router = express.Router();
const { getAllContacts } = require("../controllers/contactController")


router.route('/').get(getAllContacts)

module.exports = router

