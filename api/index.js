const express = require('express');
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());


app.post("/api/post/:id/create",(req,res) =>{
     setTimeout(() => {
           res.send(req.body);
     }, [2000]);
})
app.delete("/api/delete/:id/delete",(req,res) =>{
      setTimeout(() => {
            res.send("Deleted successfully");
      }, [2000]);
})
app.listen(3002,() =>{
      console.log("Runnig on 3002 port");
})