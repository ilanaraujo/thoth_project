// EXPRESS
const express = require('express');

const router = express.Router();


const cardController = require('../controllers/controller')
router.get('/card/data', cardController.get);


module.exports = router;
