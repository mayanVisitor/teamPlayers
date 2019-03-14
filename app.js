var express = require("/home/jb/www/blogs/node_modules/express");
var mongo =require("/home/jb/www/blogs/node_modules/mongoose");
var parser = require("/home/jb/www/blogs/node_modules/body-parser");
var mongo= require("/home/jb/www/blogs/node_modules/mongoose");
var app = express();

app.use(express.static("public"));
app.set("view engine","ejs");
app.use(parser.urlencoded({extended:true}));


mongo.connect("mongodb://localhost:27017/blogs", {useNewUrlParser:true});

var blogSchema = new mongo.Schema({
    name: String,
    rating: Number,
    desc: String,
    crated:Date
    });

var Blog = mongo.model("Blog", blogSchema);

app.get("/",(req, res)=>{
    res.render("home");
});

app.get("/blogs", (req,res)=>{
    Blog.find({},(err, allBlogs)=>{
        res.render("blogs",{allBlogs:allBlogs});
        });
    
});

app.get("/blogs/new", (req, res)=>{
    res.render("new");
    });

app.post("/blogs",(req, res)=>{
    /*var name=req.body.name;
    var rating=req.body.rating;
    var desc=req.body.desc;*/
    console.log(req);
    });
    
    
    
app.listen(3000,()=>{console.log("Listening...")});
    
    
