const express = require("express");
const router = express.Router();
const {registerUser, signInUser} = require('../controller/authController')


router.post("/signup", registerUser);
router.post("/login", signInUser)

module.exports = router;