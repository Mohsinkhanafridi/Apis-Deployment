import express from 'express';
import ContactRoutes from './ContactRoutes.js';
const router = express.Router();


router.use("/contacts",ContactRoutes)

export default router;