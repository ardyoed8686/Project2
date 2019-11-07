var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load author page and pass in an author by id
  app.get("/author/:id", function(req, res) {
    db.Author.findOne({ where: { id: req.params.id } }).then(function(dbAuthor) {
      res.render("author", {
        author: dbAuthor
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
