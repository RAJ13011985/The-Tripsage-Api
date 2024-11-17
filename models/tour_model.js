const mongoose = require("mongoose")
const tourSchema = new mongoose.Schema({
name : {
type : String,
required : [true, "Tour name is required"],
trim : true,
unique : true
},
price : {
type : Number,
required : [true, "The tour price is required"]
},
ratings : {
    type : Number,
    default : 4.5
}
})


const Tour = mongoose.model("Tour",tourSchema)

// const manualtour = new Tour({
// name : "Temple Three",
// price : 1600,
// ratings : 4.5
// })


// manualtour.save().
// then(()=>console.log("the tour manually entered successfully."))
// .catch((err)=>console.log(err))
module.exports = Tour