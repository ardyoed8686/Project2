


module.exports = function(sequelize, DataTypes) {
    var categories = sequelize.define("categories", {
      custom: DataTypes.STRING,
      description: DataTypes.TEXT
    });
    
    return categories;
   
  };

  