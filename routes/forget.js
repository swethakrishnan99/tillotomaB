const express = require("express");
const cors = require("cors");
const router = express.Router();
const resetController = require('../controllers/PasswordResetController/resetController')

router.put("/", resetController.forgotPassword)

module.exports = router;
