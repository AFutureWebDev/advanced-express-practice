const express = require("express");
const router = express.Router();
const {list, show, create} = require("../controllers/contacts")


// CONTACTS
router.get('/contacts', list)
router.get('/contacts/:id', show)  
router.post('/contacts', create)

module.exports = router;