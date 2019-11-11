// Get references to page elements
var $taskText = $("#example-text");
var $taskDescription = $("#example-description");
var $submitBtn = $("#submit");
var $taskList = $("#example-list");

// The API object contains methods for each kind of request we'll make
// get tasks
var API = {
  getTasks: function() {
    return $.ajax({
      type: "GET",
      url: "api/task",
    });
  },
  getTasks: function() {
    return $.ajax({
      url: "api/task",
      type: "POST"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getTasks().then(function(data) {
    var $tasks = data.map(function(example) {
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

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var task = {
    text: $taskText.val().trim(),
    description: $taskDescription.val().trim()
  };

  if (!(task.text && task.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.savetask(task).then(function() {
    refreshTasks();
  });

  $taskText.val("");
  $taskDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteTask(idToDelete).then(function() {
    refreshTasks();
  });
};

// Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);



