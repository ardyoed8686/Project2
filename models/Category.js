


module.exports = function(sequelize, DataTypes) {

    var Category = sequelize.define("Category", {
      
      type: DataTypes.STRING,
    });
    Category.associate = function(models){

        // This will continue to throw an error as long as post does not exist in the models directory.
    Category.hasMany(models.task),{

  };

  };
    
    return Category;
   
  };

  