var db = require("../models");

module.exports = function(app) {

  // Get all TASKs
  app.get("/api/tasks", function(req, res) {
    db.Tasks.findAll({}).then(function(dbTasks) {
      res.json(dbTasks);
    });
  });


  // Create a new TASKs
  app.post("/api/tasks", function(req, res) {
    console.log(req. body);
  
    db.Tasks.create({
      text: req.body.text,
      complete: req.body.complete
     }).then(function(dbTasks) {
      res.json(dbTasks);
    });
  });


  // Delete an TASKs by id
  app.delete("/api/tasks/:id", function(req, res) {
    db.Tasks.destroy({ where: { id: req.params.id } }).then(function(dbTasks) {
      res.json(dbTasks);
    });
  });


  // Update an TASKs by id
  app.put("/api/tasks", function(req, res) {
    db.Tasks.update({
    text: req.body.text,
    complete: req.body.complete
  },{
    where:{
      id: req.body.id
    }
  }).then(function(dbTasks) {
    res.json(dbTasks);
  });

});

};
