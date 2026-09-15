import express from 'express'
import path from 'path'
const app = express();

const products =[
{tittle: 'iphone -15',price:75000},
{tittle: 'onePlus -15',price:55000},
{tittle: 'Nothing -15',price:45000},
]

// app.get('/',(req,res)=>{
//     res.json({
//         message: "fetched all products",
//         jo_chahe: " de skte hai",
//         products: products,
//         success:true
//     });
// });
const dir = path.resolve();
console.log(dir)
res.sendFile('index.html');

const port = 1000;
app.listen(port, ()=>console.log(`server is running on port ${port}`))