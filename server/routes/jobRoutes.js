import express from 'express';
import { getJobById, getJobs } from '../controllers/jobController.js';
import { protectCompany } from '../middlewares/authMiddleware.js';


const router=express.Router()

//Route to Get All jobs Data
router.get('/',getJobs)

//Route to Get a Single Jon by ID
router.get('/:id',protectCompany,getJobById)

export default router;