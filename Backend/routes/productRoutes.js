const express = require('express');
const router = express.Router();
const ctrl = require("../controllers/productCtrl")

router.post("addProduct", ctrl.addProduct);

module.exports = router;