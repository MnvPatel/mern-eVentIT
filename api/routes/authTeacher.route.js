import express from 'express';
import { SignUp, SignIn } from '../controllers/authTeacher.controller.js';

const router = express.Router();

router.post("/Sign-Up", SignUp);
router.post("/Sign-In", SignIn);

export default router;
