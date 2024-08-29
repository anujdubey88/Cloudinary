import express from "express";
import { upload } from '../middleware/fileOnSys.js';
import fileOnCloud from '../controller/uploadOnCloud.js'; // Default import

const router = express.Router();

router.post("/", upload.single("profileImage"), fileOnCloud);

export default router;  // Use ES module syntax for exporting the router
