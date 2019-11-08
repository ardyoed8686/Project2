var db = require("../models");

module.exports = function(app) {

  // Get all TASKs
  app.get("/api/tasks", function(req, res) {
   
    db.Task.findAll({}).then(function(dbTask) {
      res.json(dbTask);
    });
  });


  // Create a new TASKs
  app.post("/api/tasks", function(req, res) {
    // console.log(req. body);
    console.log(req.body.task);
  
    db.Task.create({
      task: req.body.task,
      complete: req.body.complete
     }).then(function(dbTask) {
      res.json(dbTask);
    });
  });


  // Delete an TASKs by id
  app.delete("/api/tasks/:id", function(req, res) {
    db.Task.destroy({ where: { id: req.params.id } }).then(function(dbTask) {
      res.json(dbTask);
    });
  });


  // Update an TASKs by id
  app.put("/api/tasks/:id", function(req, res) {
    db.Task.update({
    task: req.body.task,
    complete: req.body.complete
  },{
    where:{
      id: req.params.id
    }
  }).then(function(dbTask) {
    res.json(dbTask);
  });

});

};
