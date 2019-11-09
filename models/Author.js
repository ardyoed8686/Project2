
module.exports = function(sequelize, DataTypes) {
  var Author = sequelize.define("Author", {
    name: DataTypes.STRING,
    // photo: DataTypes.TEXT
  });
    Author.associate = function(models){

        // This will continue to throw an error as long as post does not exist in the models directory.

        // This is associating Author to the Task that is done.
        Author.hasMany(models.Task, {
            foreignKey: {
              allowNull: false
            }
          });

          Author.hasMany(models.Category, {
            foreignKey: {
              allowNull: false
            }
          });
    };
  return Author;
};
