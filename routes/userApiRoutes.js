var db = require("../models");

module.exports = function(app) {

app.get("/api/user", function(req,res){
    // db.User.findAll({}).then(function(dbUser){
    //     res.json(dbUser)
    //    });
    res.send("ha it works!!");
   
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