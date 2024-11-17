const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const tourRouter = require("./routes/tour_route")
dotenv.config({path : "./config.env"})
const PORT = process.env.PORT
app.use(express.json())
app.use("/api/v1/tours",tourRouter)

const DB = process.env.DATABASE.replace("<db_password>",process.env.DATABASE_PASSWORD)

mongoose.connect(DB)
.then(()=>console.log("The server connected with the database successfully"))
.catch((err)=>console.log(err))


app.listen(PORT,()=>{
console.log(`The server is runing on ${PORT}`)
})