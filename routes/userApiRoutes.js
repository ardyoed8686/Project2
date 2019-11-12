var db = require("../models");

module.exports = function(app) {

app.get("/api/user", function(req,res){
    db.User.findAll({where:{}}).then(function(dbUser){
        res.json(dbUser)
       });
    // res.send("ha it works!!");
   
});


// This validates user log in.
app.get("/api/login_data", function(req,res){
    db.User.findOne({where:{username:"Gassy", password:"mobius1"}}).then(function(dbUser){
        
        if(dbUser === null){
            res.send("Sorry we have no record of the username/password you entered. Please try again or sign up.");

        }else if (dbUser){
            res.send("Welcome " + dbUser.username + "!");
        }
        console.log(dbUser)

        }); 

    // res.json(dbUser);
});


app.post("/api/login", function(req, res){

var usr = req.body.userLogin;
var usrpassword = req.body.userPassword

app.get("/api/login_data", function(req,res){
    db.User.findAll({where:{username:usr, password:usrpassword}}).then(function(dbUser){
        res.json(dbUser.length)
       }); 
});



});

app.post("/api/user", function(req, res){

    var usr = req.body.username;
    var passW = req.body.password;
    var img = req.body.img_url;

    db.User.create({
        username:usr,
        password:passW,
        img_url:img
    }).then(function(dbUser){
        console.log(dbUser);
        res.json(dbUser)
    });

});

}