import express from "express";
// const authController  = require('./../Controllers/authController')
// const loginController  =  require('./../Controllers/login');
// const { protect } = require('../Middelware/protectRoutes');
import {login,signup} from "./../Controllers/authController.js"
const router = express.Router();
router.route('/signup').post(signup)
router.route('/login').post(login)
export default router;