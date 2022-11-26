import express from "express";
import {
  createCategoryController,
  deleteCategoryController,
  getCategoryController,
  updateCategoryController,
} from "../controllers/categoryController.js";
const router = express.Router();

router.post("/", createCategoryController);
router.get("/", getCategoryController);
router.patch("/update/:id", updateCategoryController);
router.delete("/delete/:id", deleteCategoryController);
export default router;
