import express from 'express'
import mongoose from 'mongoose'
import dns from 'node:dns'

dns.setServers(['1.1.1.1', '8.8.8.8'])

const app = express()

mongoose.connect(
  "mongodb+srv://digitalsgg1_db_user:SfKHeFUsb0l8Tfqx@cluster0.rjy0f0v.mongodb.net/?appName=Cluster0",
  {
    dbName: "Nodejs Mastery Course",
  }
)
.then(() => console.log("MongoDB Connected..!"))
.catch(console.error);
const port =1000;
app.listen(port,()=>console.log(`server is running on port ${port}`))