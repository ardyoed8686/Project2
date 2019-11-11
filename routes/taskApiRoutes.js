var db = require("../models");

module.exports = function(app) {

  // Get all TASKs
  app.get("/api/tasks", function(req, res) {
   
    db.Task.findAll({}).then(function(dbTask) {
      // console.log("This is " + dbTask);
      res.json(dbTask);
    });
  });


  // Create a new TASKs
  app.post("/api/tasks", function(req, res) {
<<<<<<< HEAD
    db.Task.create({
      name: req.body.name,
      description: req.body.description,
      due: req.body.due,
      complete: req.body.complete
    })
    .then(function(dbTask) {
      res.redirect('/task')
    });



    // console.log(req.body);
    // console.log("This is a new task" + req.body.name);
    // db.Category.findOne({
    //   where: { type: req.body.type }
    // })
    // .then( function(results) {
    //   console.log(results)
      // if(results) {
      //   db.Task.create({
      //     name: req.body.name,
      //     description: req.body.description,
      //     due: req.body.due,
      //     complete: req.body.complete,
      //   })
      //   .then(function(dbTask) {
      //     res.redirect('/task')
      //   });
      // } else {

      //   db.Category.create({
      //     type: req.body.type
      //   })
    //     .then(function(results){
    //       db.Task.create({
    //         name: req.body.name,
    //         description: req.body.description,
    //         due: req.body.due,
    //         complete: req.body.complete
    //       })
    //       .then(function(dbTask) {
    //         res.redirect('/task')
    //       });
    //     })
    //   }
    // })
  });
=======
    console.log(req. body);
    console.log("This is a new task" + req.body.name);
  
    db.Category.findOne({
      where: {type: req.body.type}
    }).then (function(results){
      console.log(results)
    }
    )
  }
    // db.Task.create({
    //   name: req.body.name,
    //   description: req.body.description,
    //   due: req.body.due,
    //   complete: req.body.complete
    //  }).then(function(dbTask) {
    //   res.redirect('/task')
    // });
  // });
>>>>>>> GitanaBranch


  // Delete an TASKs by id
  app.delete("/api/tasks/:id", function(req, res) {
    db.Task.destroy({ where: { id: req.params.id } }).then(function(dbTask) {
      res.json(dbTask);
    });
  });


  // Update an TASKs by id
  app.put("/api/tasks/:id", function(req, res) {
    db.Task.update({
      name: req.body.name,
      description: req.body.description,
      due: req.body.due,
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
