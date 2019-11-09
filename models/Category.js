


module.exports = function(sequelize, DataTypes) {

    var Category = sequelize.define("Category", {
      
      type: DataTypes.STRING,
    });
    
    // ============================================/
    Task.associate = function(models){

        // This will continue to throw an error as long as post does not exist in the models directory.

        // This is associating the Category to the post that is done.
        Task.belongsTo(models.Post, {
            foreignKey: {
              allowNull: false
            }
          });
    };
    
 // ============================================/

    return Category;
   
  };

  