
module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    due: DataTypes.DATE,
    complete: {type: DataTypes.BOOLEAN, defaultValue: 0 }
  });


  Task.associate = function(models) {

  //   Task.belongsTo(models.Category, {
  //     as: "Category", 
  //     onDelete: 'CASCADE', 
  //     foreignKey: { name:'CategoryId', allowNull: false }
  // });
    // A Task should belong to an Author
    // A Task can't be created without an Author due to the foreign key constraint
    Task.belongsTo(models.Author, {
    foreignKey: {
    allowNull: false
    }
    });


    // A Task should belong to an Category
    // A Task can't be created without a Category due to the foreign key constraint
    Task.belongsTo(models.Category, {
    foreignKey: {
    allowNull: false
     }
    });
 
  }
  return Task;


};

