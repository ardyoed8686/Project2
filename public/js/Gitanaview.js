
$(document).ready(function() {
    // Getting a reference to the input field where user adds a new tasks
    var $newItemInput = $("input.new-item");
    // Our new tasks will go inside the tasksContainer
    var $tasksContainer = $(".tasks-container");
    // Adding event listeners for deleting, editing, and adding tasks
    $(document).on("click", "button.delete", deleteTasks);
    $(document).on("click", "button.complete", toggleComplete);
    $(document).on("click", ".tasks-item", editTasks);
    $(document).on("keyup", ".tasks-item", finishEdit);
    $(document).on("blur", ".tasks-item", cancelEdit);
    $(document).on("submit", "#tasks-form", insertTasks);
  
    // Our initial tasks array
    var tasks = [];
  
    // Getting tasks from database when page loads
    getTasks();
  
    // This function resets the tasks displayed with new tasks from the database
    function initializeRows() {
      $tasksContainer.empty();
      var rowsToAdd = [];
      for (var i = 0; i < tasks.length; i++) {
        rowsToAdd.push(createNewRow(tasks[i]));
      }
      $tasksContainer.prepend(rowsToAdd);
    }
  
    // This function grabs tasks from the database and updates the view
    function getTasks() {
      $.get("/api/tasks", function(data) {
        tasks = data;
        initializeRows();
      });
    }
  
    // This function deletes a tasks when the user clicks the delete button
    function deleteTasks(event) {
      event.stopPropagation();
      var id = $(this).data("id");
      $.ajax({
        method: "DELETE",
        url: "/api/tasks/" + id
      }).then(getTasks);
    }
  
    // This function handles showing the input box for a user to edit a tasks
    function editTasks() {
      var currentTasks = $(this).data("tasks");
      $(this).children().hide();
      $(this).children("input.edit").val(currentTasks.text);
      $(this).children("input.edit").show();
      $(this).children("input.edit").focus();
    }
  
    // Toggles complete status
    function toggleComplete(event) {
      event.stopPropagation();
      var tasks = $(this).parent().data("tasks");
      tasks.complete = !tasks.complete;
      updateTodo(tasks);
    }
  
    // This function starts updating a tasks in the database if a user hits the "Enter Key"
    // While in edit mode
    function finishEdit(event) {
      var updatedTasks = $(this).data("tasks");
      if (event.which === 13) {
        updatedTasks.text = $(this).children("input").val().trim();
        $(this).blur();
        updatedTasks(updatedTasks);
      }
    }
  

///////////////////////////FINISH BELLOW THE LINE////////////////////


    // This function updates a tasks in our database
    function updatedTasks(tasks) {
      $.ajax({
        method: "PUT",
        url: "/api/tasks",
        data: tasks
      }).then(getTasks);
    }
  
    // This function is called whenever a tasks item is in edit mode and loses focus
    // This cancels any edits being made
    function cancelEdit() {
      var currentTasks = $(this).data("task");
      if (currentTask) {
        $(this).children().hide();
        $(this).children("input.edit").val(currentTask.text);
        $(this).children("span").show();
        $(this).children("button").show();
      }
    }
  
    // This function constructs a todo-item row
    function createNewRow(task) {
      var $newInputRow = $(
        [
          "<li class='list-group-item task-item'>",
          "<span>",
          task.text,
          "</span>",
          "<input type='text' class='edit' style='display: none;'>",
          "<button class='delete btn btn-danger'>x</button>",
          "<button class='complete btn btn-primary'>✓</button>",
          "</li>"
        ].join("")
      );
  
      $newInputRow.find("button.delete").data("id", tasks.id);
      $newInputRow.find("input.edit").css("display", "none");
      $newInputRow.data("tasks", tasks);
      if (tasks.complete) {
        $newInputRow.find("span").css("text-decoration", "line-through");
      }
      return $newInputRow;
    }
  
    // This function inserts a new todo into our database and then updates the view
    function insertTasks(event) {
      event.preventDefault();
      var task = {
        text: $newItemInput.val().trim(),
        complete: false
      };
  
      $.post("/api/tasks", todo, getTasks);
      $newItemInput.val("");
    }
  });

  




  




// //////////////////////////REFERENCE TEAMPLATE///////////////////
// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
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
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
