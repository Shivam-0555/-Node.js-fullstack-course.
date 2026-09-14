import express from 'express'

const app = express();

app.get('./',(req,res)=>{
 res.send("You are on the home page") ;
})

app.get('/ssr',(req,res)=>{
    res.send("You are on the server side rendering page") ;
})

const port = 3000;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`); 
})