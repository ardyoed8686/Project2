var db = require("../models");

module.exports = function(app) {
  // Get all categories currently up.
  app.get("/api/categories", function(req, res) {
    db.Category.findAll({}).then(function(dbCategory) {
      res.json(dbCategory);
    });
  });

  // Create a new category
  app.post("/api/category", function(req, res) {
    db.Category.create(req.body).then(function(dbCategory) {
      res.json(dbCategory);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Category.destroy({ where: { id: req.params.id } }).then(function(dbCategory) {
      res.json(dbCategory);
    });
  });
};
