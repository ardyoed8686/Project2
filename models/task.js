
module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Tasks", {
    task: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  });
  return Task;
};