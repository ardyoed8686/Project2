


module.exports = function(sequelize, DataTypes) {

    var Category = sequelize.define("Category", {
      
      type: DataTypes.STRING,
    });
    Category.associate = function(models){
        // This will connect Category to the task id. If it gets deleted the category wont be deleted,but if it gets updated then the category will be updated as well.

        Category.hasMany(models.Task,{
          onDelete:'SET NULL',
          onUpdate:'CASCADE'
        });
      }
        
    return Category;
   
  };

  