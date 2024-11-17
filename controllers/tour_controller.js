const Tour = require("../models/tour_model")

// use get method to get all tours

exports.getAllTours = async (req,res)=>{
try {
    const tours = await Tour.find()
    if(!tours){
    return res.status(404).json({
        status : "the tour not found",
        data : null
    })
    }
    res.status(200).json({
    massage : "success to get all tours list",
    tourLengths : tours.length,
    data : tours
    })
} catch (error) {
    res.status(400).json({
    massage : "fail to get all tours lists",
    status : error
    })
}
}


// use get method to get specific tour

exports.specificTour = async (req,res)=>{
    try {
        const tours = await Tour.findById(req.params.id)
        if(!tours){
        return res.status(404).json({
            status : "the tour not found",
            data : null
        })
        }
        res.status(200).json({
        massage : "success to get specific tour",
        tourLengths : tours.length,
        data : tours
        })
    } catch (error) {
        res.status(400).json({
        massage : "fail to get specific",
        status : error
        })
    }
    }

    // use post method to create a new tour

exports.createTour = async (req,res)=>{
    try {
        const tours = await Tour.create(req.body)
        res.status(200).json({
        massage : "success to create a new tour",
        tourLengths : tours.length,
        data : tours
        })
    } catch (error) {
        res.status(400).json({
        massage : "fail to create a new tour",
        status : error
        })
    }
    }



    // use patch method to update a tour

exports.updateTour = async (req,res)=>{
    try {
        const tours = await Tour.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!tours){
        return res.status(404).json({
            status : "the tour not found",
            data : null
        })
        }
        res.status(200).json({
        massage : "success to update a tour",
        tourLengths : tours.length,
        data : tours
        })
    } catch (error) {
        res.status(400).json({
        massage : "fail to to update a tour",
        status : error
        })
    }
    }


    // use delete method to delete a tour

exports.deleteTour = async (req,res)=>{
    try {
        const tours = await Tour.findByIdAndDelete(req.params.id)
        if(!tours){
        return res.status(404).json({
            status : "the tour not found",
            data : null
        })
        }
        res.status(200).json({
        massage : "success to delete a tour",
        tourLengths : tours.length,
        data : tours
        })
    } catch (error) {
        res.status(400).json({
        massage : "fail to delete a tour",
        status : error
        })
    }
    }