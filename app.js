const express=require("express");
const app=express();
const mongoose= require("mongoose");
const path=require("path");
const ejsMate=require("ejs-mate");
const offerings=require("./models/offerings.js");
const gallery= require("./models/gallery.js")


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
// app.set(express.static(path.join(__dirname,"public")));
app.use(express.static(path.join(__dirname,"/public")));
app.engine("ejs",ejsMate);

main()
    .then(()=>{
        console.log("db connection success")
    })
    .catch((err)=>{
        console.log(err);
    });
async function main(){
        await mongoose.connect("mongodb://127.0.0.1:27017/pulluvillakam");
}

app.get("/home",async(req,res)=>{

    const galleries= await gallery.find();
    let offers= await offerings.find();
    res.render("home/index.ejs",{galleries});
});
app.get("/history",async(req,res)=>{
  
    res.render("home/templeHistory.ejs");
});

app.get("/offerings",async(req,res)=>{
    let offers= await offerings.find();
    res.render("home/offerings.ejs",{offers});
});

app.get("/contactus",(req,res)=>{
    res.render("home/contact.ejs");
})

app.listen(3030,(req,res)=>{
    console.log("server is listening");
})