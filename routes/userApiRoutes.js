var db = require("../models");

module.exports = function(app) {

app.get("/api/user", function(req,res){
    db.User.findAll({where:{}}).then(function(dbUser){
        res.json(dbUser)
       });
    // res.send("ha it works!!");
   
});











// This checks to see that username and password exists in the database.

app.post("/api/login_data", function(req,res){
    var usr = req.body.userName;
    var usrPassword = req.body.userPassword
   

    db.User.findOne({where:{ username:usr, password:usrPassword}}).then(function(dbUser){
        
        if(dbUser === null){
            res.send("Sorry we have no record of the username/password you entered. Please try again or sign up.");

        }else if (dbUser){
            
        }
        console.log(dbUser)

        }); 

   
});


// This adds the user to database and checks that the user does not match any other user name in the database.
    app.post("/api/user", function(req, res){

        var usr = req.body.username;
        var passW = req.body.password;
        var img = req.body.img_url;

        console.log(usr,passW,img)

            db.User.findOne({where:{username:usr}}).then(function(dbUser){
                    
            if(dbUser){
            console.log("This user name is already in use. Please choose another.");
            
            }
            else{
                        
            db.User.create({
                username:usr,
                password:passW,
                img_url:img
            }).then(function(dbUser){
                console.log(dbUser);
                res.json(dbUser)
            });

            }  

            });


    });

}