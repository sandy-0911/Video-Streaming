import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router()

router.route("/register").post(registerUser)
// router.route("/login").post(login)
router.get('/test', (req, res) => res.send('Test route works'));



export default router;