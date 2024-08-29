// import { cloudConnect } from "../config/cloudConnect.js";
import cloudinary from "cloudinary"
import fs from "fs"

const fileOnCloud = async (req, res) => {
    try {
        console.log(req.file.path)
        const uploadResult = await cloudinary.uploader.upload(req.file.path, {
            public_id: 'AnujDubey',  // Consider making this dynamic to avoid overwriting
        });

        return res.status(200).json({
            message: "File uploaded successfully",
            status: true,
            data: uploadResult,
        });
    } 
    catch (error) { // Log the error for debugging
        console.log("There is an error ...........")
        fs.unlinkSync(req.file.path)
        return res.status(500).json({
            message: "Please try again",
            status: false,
            error: error.message,
        });
    }
};

export default fileOnCloud;
