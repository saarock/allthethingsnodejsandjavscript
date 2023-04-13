const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const {UserModel, Profile } = require('../database/sechma');
// import { Message } from '../database/sechma';



router.post('/giveId', async (req, res) => {
let cookie = await req.body;
console.log("IDICHCHHA GAUTAM ");
console.log(cookie, "THIS IS COOKIES");
let verifyId = await jwt.verify(cookie.cokie, process.env.SECRET_KEY);
console.log(verifyId._id, "This is the id");
res.status(200).json({id: verifyId});

})


module.exports = router;