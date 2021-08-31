const mongoose = require ('mongoose')

const DB_URL ='mongodb://localhost:27017/restAPI'

const connectDB =async()=>{

try {
    await mongoose.connect( DB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true})
        console.log('data base is connected')
} catch (error) {
    console.log(`an not connect to database${err}`)
}

}
module.exports = connectDB
