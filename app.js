var express = require("/home/jb/www/blogs/node_modules/express");
var mongo =require("/home/jb/www/blogs/node_modules/mongoose");
var parser = require("/home/jb/www/blogs/node_modules/body-parser");
var mongo= require("/home/jb/www/blogs/node_modules/mongoose");
var app = express();

app.use(express.static("public"));
app.set("view engine","ejs");
app.use(parser.urlencoded({extended:true}));


mongo.connect("mongodb://localhost:27017/teams", {useNewUrlParser:true});

var playerSchema = new mongo.Schema({
    name: String,
    age: Number,
    nationality: String,
    position:String,
    number:String,
    creation: Date
    });
var Player = mongo.model("Player", playerSchema);

var teamSchema = new mongo.Schema({
    name: String,
    city: String,
    creation: Date,
    members:[playerSchema]
    });
var Team = mongo.model("Team", teamSchema);

app.get("/",(req, res)=>{
    res.render("home");
});

app.get("/teams", (req,res)=>{
    Team.find({},(err, allTeams)=>{
        if(err){
            console.log(err);
        }else{
        res.render("teams",{allTeams:allTeams});}
        });
    });

app.get("/teams/new", (req, res)=>{
    res.render("new");
    });

app.post("/teams",(req, res)=>{
    var name_ = req.body.name;
    var city_ = req.body.city;
    Team.create({name:name_, city:city_});
    
    });

app.get("/teams/:id",(req,res)=>{
    Team.find({},()=>{
        
    })
        
    });
    
    
});
    
    
app.listen(3000,()=>{console.log("Listening...")});
    
    
