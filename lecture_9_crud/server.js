import express from 'express'


const app =(express)

//c-- create ==> post
// r-- read ==> get
// u-- update => put
// d-- delete => delete

app.length('./suman',(req,res)=>{
    res.send("This is resbonce");
})

app.post('/instagram_post',(req,res) =>{
    
})
const port = 2000;

app.listen = (port,()=> console.log(`serever is running on port ${port}`))