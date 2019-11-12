// Get references to page elements
var $taskTitle = $("#title-description");
var $taskDescription = $("#task-description");
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
  saveTasks: function(task) {
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
    console.log(data)
    var $tasks = data.map(function(task) {
      var $a = $("<a>")
        .text(task.text)
        .attr("href", "/api/" + task.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": task.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $taskList.empty();
    $taskList.append($tasks);
  });
};

// handleFormSubmit is called whenever we submit a new task
// Save the new task to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var task = {
    title: $taskTitle.val().trim(),
    description: $taskDescription.val().trim()
  };

  if (!(task.title && task.description)) {
    alert("You must enter a task title and description!");
    return;
  }

  API.saveTasks(task).then(function() {
    refreshTasks();
  });

  $taskTitle.val("");
  $taskDescription.val("");
};

// handleDeleteBtnClick is called when a tasks's delete button is clicked
// Remove the task from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");
    console.log($(this).parent())

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


