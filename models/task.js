
module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    task: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  });

  // Category.associate = function(models){

        // BelongsTo//
        
        
        This will continue to throw an error as long as post does not exist in the models directory.

        // This is associating the Category to the post that is done.
        // Category.belongsTo(models.Post, {
        //     foreignKey: {
        //       allowNull: false
        //     }
        //   });
    // };

  return Task;
};