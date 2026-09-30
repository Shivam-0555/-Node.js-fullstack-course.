import express from 'express'

const app = express();

 mongoose.connect(
   "mongodb+srv://digitalsgg1_db_user:SfKHeFUsb0l8Tfqx@cluster0.rjy0f0v.mongodb.net/?appName=Cluster0",
   {
     dbName: "Nodejs Mastery Course",
   }
 )
 .then(() => console.log("MongoDB Connected..!"))
 .catch(console.error);
  
const port = 1000;

app.listen(postMessage,()=>console.log(`Server is running on port ${port}`))
