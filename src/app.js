const express =require('express');
const path =require('path');
const hbs=require('hbs');
const port=process.env.PORT || 8000;

const app = express();
//public static path
const staticPath=path.join(__dirname,"../public");
const viewsPath=path.join(__dirname,"../templates/views");
const partialsPath=path.join(__dirname,"../templates/partials");


app.use(express.static(staticPath));
hbs.registerPartials(partialsPath);

app.set('view engine','hbs');
app.set("views",viewsPath);

// Routing.........

app.get('/',(req,res)=>{
    res.render("index");
});
app.get('/about',(req,res)=>{
    res.render("about");
});
app.get('/weather',(req,res)=>{
    res.render("weather");
});
app.get('/about/*',(req,res)=>{
    res.render("404error");
});
app.get('/weather/*',(req,res)=>{
    res.render("404error");
});
app.get('*',(req,res)=>{
    res.render("404error");
});


app.listen(port,(error)=>{
 console.log("server starts");
});
