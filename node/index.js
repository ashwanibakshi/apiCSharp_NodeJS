const express = require("express");
const axios   = require("axios");

const app = express();

app.use(express.json());

const options = {
   headers: {'Content-Type': 'application / json'}
 };

app.get("/showall",(req,res)=>{
     try {
         axios.get('http://localhost:44000/api/values')
         .then((data)=>res.json({data:data.data}))
         .catch((error)=>res.json({error:error.message}))
     } catch (error) {
        res.json({error:error.message});
     }
});

app.get("/showbyid/:index",(req,res)=>{
     try {
        axios.get('http://localhost:44000/api/values/'+req.params.index)
        .then((data)=>res.json({data:data.data}))
        .catch((error)=>res.json({error:error.message}))
     } catch (error) {
        res.json({error:error.message});
     }
});

app.post("/addname",(req,res)=>{
    try {
       const data = {
         name : req.body.name
       }
       axios.post('http://localhost:44000/api/values',JSON.stringify(data),options)
       .then((data)=>res.json({data:data.data}))
       .catch((error)=>res.json({error:error.message}))
    } catch (error) {
      res.json({error:error.message});
    }
});

app.put("/updatename/:index",(req,res)=>{
    try {
       const data = {
         name : req.body.name
       }
       axios.put('http://localhost:44000/api/values/'+req.params.index,JSON.stringify(data),options)
       .then((data)=>res.json({data:data.data}))
       .catch((error)=>res.json({error:error}))
    } catch (error) {
      res.json({error:error.message});
    }
});

app.delete("/removename/:index",(req,res)=>{
   try {
      axios.delete('http://localhost:44000/api/values/'+req.params.index)
      .then((data)=>res.json({data:data.data}))
      .catch((error)=>res.json({error:error.message}))
   } catch (error) {
      res.json({error:error.message});
   }
});

app.listen(3000,()=>console.log('server run at port 3000'));