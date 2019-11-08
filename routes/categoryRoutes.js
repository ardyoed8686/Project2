var db = require("../models");

module.exports = function(app) {

  app.get('/api/category', function(req,res){
    // res.send("This is the file");
    db.Category.findAll({}).then(function(dbCategory){
     res.json(dbCategory)
    });

  });

  // Create a new category
  app.post("/api/category", function(req, res) {
    db.Category.create({
      type: req.body.type
    }).then(function(dbCategory){
      res.json(dbCategory);
    })
  });

  // Update
// app.update()

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Category.destroy({ where: { id: req.params.id } }).then(function(dbCategory) {
      res.json(dbCategory);
    });
  });
};
