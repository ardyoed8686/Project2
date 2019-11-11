


module.exports = function(sequelize, DataTypes) {

    var Category = sequelize.define("Category", {
      
      type: DataTypes.STRING,
    });
    Category.associate = function(models){

      
        
    //   // This will connect Category to the task id. 
        // models.Category.hasMany(models.Task,{
        //   foreignKey:{
        //         // allowNull: false
        //       }
        // });


        Category.hasMany(models.Task)
      }
        
    return Category;
   
  };

  