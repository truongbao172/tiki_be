import express from "express";
import {
  createProductController,
  getProductController,
  updateProductController,
  deleteProductController,
} from "../controllers/productController.js";
const router = express.Router();

router.post("/", createProductController);
router.get("/", getProductController);
router.patch("/update/:id", updateProductController);
router.delete("/delete/:id", deleteProductController);
export default router;
