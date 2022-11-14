import mongoose from 'mongoose';

const TripSchema = new mongoose.Schema({
    nameTrip: {
        type: String,
        required: true,
    },
    typeTrip: {
        type: String,
    },
    countries: {
        type: [String],
        required: true,
    },
    cities: {
        type: [String],
        required: true,
    },
    days_number: {
        type: Number,
        required: true,
        min: 3,
        max: 31
    },
    first_info: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    accommodation: {
        type: [String],
        required: true,
    },
    meals: {
        type: [String]
    },

    transport: {
        type: [String]
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
    },
    price: {
        type: Number,
        required: true,
        min: 500,
        max: 5000,
    },
    available_days_start: {
        type: [String],
        required: true,
    },
    available_days_end: {
        type: [String],
        required: true,
    },
    trip_start: {
        type: String,
        required: true,
    },
    trip_end: {
        type: String,
        required: true,
    },
    photos: {
        type: [String],
    },
    info: {
        type: {String: Number}
    }
})
export default mongoose.model("Trip",TripSchema)