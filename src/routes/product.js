import express from "express";
import {
  createProductController,
  getProductController,
  updateProductController,
  deleteProductController,
  detailsProductController,
} from "../controllers/productController.js";
const router = express.Router();

router.post("/", createProductController);
router.get("/", getProductController);
router.get('/:productId', detailsProductController)
router.patch("/update/:id", updateProductController);
router.delete("/delete/:id", deleteProductController);
export default router;
