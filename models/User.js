


module.exports = function(sequelize, DataTypes) {

    var User = sequelize.define("User", {
      
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      img_url: DataTypes.STRING

    });
        
    return User;
   
  };