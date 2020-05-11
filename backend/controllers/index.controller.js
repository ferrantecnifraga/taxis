const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
  res.json({
    message: "Prueba con otras rutas",
    path: "/taxislleida/api/v1/user/"
  })
};

module.exports = indexCtrl;