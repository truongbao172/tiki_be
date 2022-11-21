import express from "express";
import {createProductController } from "../controllers/productController.js";
const router = express.Router()

router.post('/', createProductController)
export default router