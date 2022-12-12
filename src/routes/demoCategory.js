import express from "express";
import { createDemoCategoryController, getAllDemoCategoryController } from "../controllers/demoCategoryController.js";

const router = express.Router();

router.post("/", createDemoCategoryController);
router.get("/", getAllDemoCategoryController);
// router.get('/:id', detailsProductController)
// router.patch("/update/:id", updateProductController);
// router.delete("/delete/:id", deleteProductController);
export default router;