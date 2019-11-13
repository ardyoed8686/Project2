// Get references to page elements
var $taskName = $("#name-text");
var $taskType = $("#category-description");
var $taskTitle = $("#title-description");
var $taskDescription = $("#task-description");
var $taskDue = $("#date-description");
var $submitBtn = $("#submit");
var $taskList = $("#task-list");
var $deleteBtn = $("#delete");



// The API object contains methods for each kind of request we'll make
// get tasks
var API = {
  getTasks: function() {
    return $.ajax({
      type: "GET",
      url: "api/tasks",
    });
  },
  saveTask: function(task) {
    return $.ajax({
      url: "api/tasks",
      type: "POST",
      data: task
    });
  },
  updateTask: function(id) {
    return $.ajax({
      url: "api/tasks/" + id,
      type: "PUT"
    });
  },
  deleteTask: function(id) {
    return $.ajax({
      url: "api/tasks/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshTasks = function() {
  
  API.getTasks().then(function(data) {
    console.log("This is the data" + data)
    var $tasks = data.map(function(task) {
      var $a = $("<a>")
        .text(task.text)
        .attr("href", "/api/" + task.id);

      var $li = $("<li>")
        .attr({
          class: "list-group",
          "data-id": task.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });
console.log("what is the taskList", $taskList)
    $taskList.empty();
    $taskList.append($tasks);
  });
};

// handleFormSubmit is called whenever we submit a new task
// Save the new task to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var task = {
    name: $taskName.val().trim(),
    type: $taskType.val().trim(),
    title: $taskTitle.val().trim(),
    description: $taskDescription.val().trim(),
    due: $taskDue.val().trim()
  };

  if (!(task.title && task.description)) {
    alert("You must enter a task title and description!");
    return;
  }

  API.saveTask(task).then(function() {
    refreshTasks();
  });

  $taskName.val("");
  $taskType.val("");
  $taskTitle.val("");
  $taskDescription.val("");
  $taskDue.val("");
};

// handleDeleteBtnClick is called when a tasks's delete button is clicked
// Remove the task from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    // .parent()
    .attr("id");
    console.log($(this).parent())
    console.log(idToDelete)
    $(this).parent().parent().parent().empty();

  API.deleteTask(idToDelete).then(function() {

    refreshTasks();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
// $submitBtn.on("click", function(){
//   console.log("Geclikt");
// }); 
// $taskList.on("click", ".delete", handleDeleteBtnClick);
$(".delete").click(handleDeleteBtnClick);


console.log("hello world");


