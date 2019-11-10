var db = require("../models");

module.exports = function(app) {

app.post("/api/process-form", function(req, res){

var author = req.body.author;
var category = req.body.category;
var tsk = req.body.task;

console.log(author," \n",category, " \n",tsk);

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

  res.send("success")



});
}