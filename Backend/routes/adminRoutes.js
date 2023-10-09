const express = require('express');

const router = express.Router();

const ctrl = require("../controllers/adminCtrl")

router.get("", ctrl.login)

module.exports = router;
