const express = require("express");
const router = new express.Router;

const senderController = require('../controllers/sender.controller.js');

router.post('/sendEmail', (req, res) => {
    console.log('New request to send email arrived...');
    senderController.sendEmail(req, res);
})


module.exports = router;