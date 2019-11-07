var db = require("../models");

module.exports = function(app) {
  // Get all authors
  app.get("/api/authors", function(req, res) {
    db.Author.findAll({}).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  // Create a new author
  app.post("/api/authors", function(req, res) {
    db.Author.create(req.body).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  // Delete an author by id
  app.delete("/api/authors/:id", function(req, res) {
    db.Author.destroy({ where: { id: req.params.id } }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });
};
