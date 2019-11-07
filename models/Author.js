module.exports = function(sequelize, DataTypes) {
  var Author = sequelize.define("Authors", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Author;
};
