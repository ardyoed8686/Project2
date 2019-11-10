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
    //   check if author exists in database
//     db.Author.findOne({}).then(function(dbAuthor){
// // if author name not found do db.Author.create
//     })
// console.log(req.body.name);

    db.Author.create({
        name: req.body.name
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  // Update an author name
  app.put("/api/authors/update/:id", function(req, res) {
    db.Author.update({
        name: req.body.name},
        {
        where: {id: req.params.id}
        }
    ).then(function(dbAuthor) {
      res.send("We updated " + dbAuthor);
    });
  });

  // Delete an author by id
  app.delete("/api/authors/:id", function(req, res) {
    db.Author.destroy({
         where: { id: req.params.id } }).then(function(dbAuthor) {
      res.json(dbAuthor);
      
    });
  });
};
