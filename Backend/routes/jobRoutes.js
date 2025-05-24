import express from 'express';
import { createJob, getAllJobs, getJob, updateJob, deleteJob, getRecentJobs } from '../controllers/jobController.js';

const router = express.Router();

// Job routes
router.post('/create-job', createJob);
router.get('/all-jobs', getAllJobs);
router.get('/recent-jobs', getRecentJobs);
router.get('/:id', getJob);
router.put('/update-job/:id', updateJob);
router.delete('/delete-job/:id', deleteJob);

export default router; 