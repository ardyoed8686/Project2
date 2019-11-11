


module.exports = function(sequelize, DataTypes) {

    var Category = sequelize.define("Category", {
      
      type: DataTypes.STRING,
      timestamps:false
    });
    Category.associate = function(models){
        
      // This will connect Category to the task id. 
        Category.hasMany(models.Task,{
          onDelete:'SET NULL',
          onUpdate:'CASCADE'
        });
      }
        
    return Category;
   
  };

  