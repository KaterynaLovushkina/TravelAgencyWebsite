import express from "express";
import {
    countByCountry, countByType,
    createTrip,
    deleteTrip,
    getAllTrip,
    getTrip,
    updateTrip
} from "../controllers/trip.js";
import {verifyAdmin} from "../utils/verifyToken.js";

const router = express.Router();

router.post('/', createTrip);

router.put('/:id',updateTrip)
router.delete('/:id', deleteTrip)
router.get('/find/:id', getTrip)
router.get('/', getAllTrip)

router.get('/countByCounty', countByCountry)
router.get('/countByType', countByType)

export default router