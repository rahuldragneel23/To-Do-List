const express=require("express");
const body_parser=require("body-parser");

const app=express();
var items=["webd","leetcode","eat"];
var workitems=[];
app.set('view engine', 'ejs');
app.use(body_parser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(request,response){

var today=new Date();
var day="";
var options={weekday:"long",day:"numeric",month:"short"};
day=today.toLocaleDateString("en-US",options);//a method to get the date from variable day

response.render('lists',{Listofitems:day,newitems:items});

});
app.post("/",(req,res)=>{
   var item=req.body.itemoftodolist;
   items.push(item);
   res.redirect("/");
});
app.get("/work",(req,res)=>{
res.render('lists',{Listofitems:"Worklist",newitems:workitems});
});
app.post("/work",(req,res)=>{
    var item=req.body.itemoftodolist;
    workitems.push(item);
    res.redirect("/work");
})
app.listen(3000,function(){
    console.log("server 3000 has been called");
});