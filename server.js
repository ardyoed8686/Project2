require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
// require moment.js npm package
var moment = require("moment");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");



// Routes
require("./routes/categoryRoutes")(app);
require("./routes/authorApiRoutes")(app);
require("./routes/htmlRoutes")(app);
require("./routes/taskApiRoutes.js")(app); 
require("./routes/userApiRoutes.js")(app);
// require("./routes/userRoutes.js")(app);



var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// // Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
 });

module.exports = app;
