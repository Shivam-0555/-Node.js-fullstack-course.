import express from 'express'

const app = express()
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.post('/form-submit',(req,res)=>{
    console.log(req.body)
    res.json({
        massage: 'Youe form has been submitted',success:true
    })
})

const port = 2000;
app.listen(port,()=> console.log(`server is running on port ${port}`))