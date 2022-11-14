import express from "express";
import {deleteUser, getAllUser, updateUser, getUser} from "../controllers/user.js";
import {verifyAdmin, verifyToken, verifyUser} from "../utils/verifyToken.js";

const router = express.Router();


router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.get('/:id',getUser)
router.get('/', getAllUser)

export default router