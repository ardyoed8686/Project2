var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
    // db.Author.findAll({}).then(function(dbAuthor) {
    //   res.render("index", {
    //     msg: "Welcome!",
    //     author: dbAuthor
    //   });
    // });
  });

  // Load author page and pass in an author by id
  // app.get("/author/:id", function(req, res) {
  //   db.Author.findOne({ where: { id: req.params.id } }).then(function(dbAuthor) {
  //     res.render("author", {
  //       author: dbAuthor
  //     });
  //   });
  // });

   app.get("/task", function(req, res) {
    db.Task.findAll({
       }).then(function(dbTask) {
         console.log("what is " + JSON.stringify(dbTask));
         var todo = {toDoList:dbTask };
      res.render("index", todo);
    });
  });

  // // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });

 
};


  
