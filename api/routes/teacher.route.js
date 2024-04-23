import express from 'express';
import { getUserListings, testt, updateTeacher } from '../controllers/teacher.controller.js';
import { verifyToken } from '../utils/verifyTeacher.js';

const router = express.Router();

router.get('/testt', testt);
router.get('/updateTeacher/:id', verifyToken, updateTeacher);
router.get('/listings/:id', verifyToken, getUserListings);

export default router;
