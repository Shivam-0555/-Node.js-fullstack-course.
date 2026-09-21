import express from 'express'
import mongoose from 'mongoose'
import { User } from './models/user.js'

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.urlencoded({ extended: true }))

mongoose.connect(
  "mongodb+srv://digitalsgg1_db_user:SfKHeFUsb0l8Tfqx@cluster0.rjy0f0v.mongodb.net/?appName=Cluster0",
  {
    dbName: "Nodejs Mastery Course",
  }
)
  .then(() => console.log("MongoDB Connected..!"))
  .catch(console.error)

app.get('/', (req, res) => {
  res.render('inde.ejs')
})

app.post('/form-submit', async (req, res) => {
  try {
    const { name, email, password, age, phone } = req.body

    const newUser = await User.create({
      name,
      email,
      password,
      age: Number(age),
      contact: Number(phone)
    })

    console.log("Getting the data from body", req.body)
    res.json({ message: "Your form has been submitted..!", user: newUser, success: true })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message, success: false })
  }
})

const port = 1000
app.listen(port, () => console.log(`server is running on port ${port}`))