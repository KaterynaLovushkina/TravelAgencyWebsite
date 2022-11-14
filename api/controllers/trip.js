import Trip from "../models/Trip.js";

export const createTrip = async (req,res,next) =>{
    const newTrip = new Trip(req.body)
    try{
        const savedTrip = await newTrip.save()
        res.status(200).json(savedTrip)
    } catch (err){
       next(err);
    }
}
export const updateTrip = async (req,res,next) =>{
    try{
        const updatedTrip = await Trip.findByIdAndUpdate(req.params.id, { $set: req.body}, {new: true})
        res.status(200).json(updatedTrip)
    } catch (err){
        next(err)
    }
}
export const deleteTrip = async (req,res,next) =>{
    try{
        await Trip.findByIdAndDelete(req.params.id)
        res.status(200).json("Trip is deleted")
    } catch (err){
       next(err)
    }
}
export const getTrip = async (req,res,next) =>{
    try{
        const FindedTrip = await Trip.findById(req.params.id)
        res.status(200).json(FindedTrip)
    } catch (err){
        next(err)
    }
}
export const getAllTrip = async (req,res,next) =>{
    const { ...others} = req.query;
    try{
        const Trips = await Trip.find({...others, rating:{ $gt: 3.5}}).limit(req.query.limit)
        res.status(200).json(Trips)
    }catch (err){
        next(err);
    }
}

export const countByCountry = async (req,res,next) =>{
    const countries = req.query.countries.split(',')
    try{
        const list = await Promise.all(countries.map(countries=>{
            return Trip.countDocuments({countries:countries})
        }))
        res.status(200).json(list);
    }catch (err){
        next(err);
    }
}

export const countByType = async (req,res,next) =>{

    try{
        const hikingCount = await Trip.countDocuments({typeTrip: "Hiking & Trekking"})
        const exlplorerCount = await Trip.countDocuments({typeTrip: "Explorer"})
        const cruiseCount = await Trip.countDocuments({typeTrip: "Cruise"})
        const christmasCount = await Trip.countDocuments({typeTrip: "Christmas Holiday"})

        res.status(200).json([
            {type:"Hiking & Trekking", count:hikingCount},
            {type:"Explorer", count:exlplorerCount},
            {type:"Cruise", count:cruiseCount},
            {type:"Christmas Markets", count:christmasCount},
        ]);
    }catch (err){
        next(err);
    }
}