const express = require('express');
const router  = express.Router();

const { renderIndex } = require('../controllers/index.controller')
/* GET home page */
router.get('/', renderIndex);

module.exports = router;
