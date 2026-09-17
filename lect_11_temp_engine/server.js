import express from 'express'

const app = express()
app.get('./',(req,res)=>{
     let name ='ram'
    res.render('index.ejs',{name})
    

})

const port = 1000;

app.listen(port,()=> console.log(`server is running on port ${port}`))