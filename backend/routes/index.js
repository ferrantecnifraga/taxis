const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.json({
    message: "Prueba con otras rutas",
    path: "/taxislleida/api/v1/user/"
  })
});

module.exports = router;
