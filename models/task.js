
module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    task: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  });
  return Task;
};