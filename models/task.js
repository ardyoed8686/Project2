
module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    due: DataTypes.DATE,
    complete: DataTypes.BOOLEAN
  });


  Task.associate = function(models) {

  //   Task.belongsTo(models.Category, {
  //     as: "Category", 
  //     onDelete: 'CASCADE', 
  //     foreignKey: { name:'CategoryId', allowNull: false }
  // });
    // A Task should belong to an Author
    // A Task can't be created without an Author due to the foreign key constraint
    // models.Task.belongsTo(models.Author, {
    //   onDelete: "CASCADE",
      // foreignKey: {
      //   allowNull: true
      // }
    // });


    // A Task should belong to an Category
    // A Task can't be created without a Category due to the foreign key constraint
    models.Task.belongsTo(models.Category, {
      foreignKey: {
        allowNull: false,
        defaultValue: 1
      }
    });
  }
  
  return Task;

 
};

