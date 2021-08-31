const express =require('express')
require("dotenv").config()
const connectDB = require('./config/connectDB')
connectDB()
const app = express();
app.use(express.json())

app.use("/api/contact" , require("./routes/Contact"))


const PORT= process.env.PORT || 5000;

app.listen(PORT, (err)=>{
err?
console.log(err)
:
console.log(`Server  is running in ${PORT}...`)
})
