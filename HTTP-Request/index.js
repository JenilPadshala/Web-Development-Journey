import express from "express";
const app = express();
const port = 3000;

app.listen(port , ()=>{
    console.log(`Server started on port ${port}.`);
});

app.get("/", (req, res)=>{
      res.sendFile("/Users/jenilpadshala/Web Development Projects/HTTP-Request/public/index.html");
    

});