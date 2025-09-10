import {v2 as cloudinary} from 'cloudinary' // client file bhejega mukter ko which is a receptionist , it will store the file in local storage and then upload it to cloudinary. Cloudianry will demand a local path to upload the file 
import fs from 'fs' // file system module to delete files from local storage

    // Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

//method banao jisme parameter mai local file ka path doge , succesfully upload hone par link ko unlink kar denge locally toh wo delete ho jayega 

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
            //upload file on cloudinary
            const response = 
            
            
            
            await cloudinary.uploader.upload(localFilePath,{
                resource_type: "auto" 
            })
            //file has been uploaded successfully
            // console.log("file is uploaded on cloudinary",
            //     response.url);
            fs.unlinkSync(localFilePath)
                return response          
    }
    catch(error){
         fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload was unsuccessful  
         return null
        }
    }
export {uploadOnCloudinary}
