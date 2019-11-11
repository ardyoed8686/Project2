var db = require("../models");

module.exports = function(app) {

app.post("/api/process-form", function(req, res){

var author = req.body.author;
var category = req.body.category;
var tsk = req.body.task;

console.log(author," \n",category, " \n",tsk);

var todoObj = {
    todo:[author, category, tsk]
    
};

db.Author.create({
    name: author
}).then(function(dbAuthor) {
  console.log(dbAuthor);
});


db.Category.create({
    type: category
  }).then(function(dbCategory){
    console.log(dbCategory);
  });


db.Task.create({
    task: tsk,
    complete: false
   }).then(function(dbTask) {
    console.log(dbTask);
  });


 
    
  

// Need to hit the database endpoint so that the rendering occurs in reference to database memory as apposed to the object that I created in this file.

res.render("index", todoObj)



});
}