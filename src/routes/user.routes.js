import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js"; 


const router = Router()
router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1 // max 1 file for avatar
        },
        {
            name: "coverImage",
            maxCount: 1 // max 1 file for cover
        }
    ]),
    registerUser
)
// router.route("/login").post(login)
router.get('/test', (req, res) => res.send('Test route works'));
export default router;
