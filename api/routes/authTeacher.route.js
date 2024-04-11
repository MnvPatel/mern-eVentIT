import express from 'express';
import { SignUp } from '../controllers/authTeacher.controller.js';

const router = express.Router();

router.post("/Sign-Up", SignUp);

export default router;
