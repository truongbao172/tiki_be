import express from "express";
import {
  createCardIdeasController,
  deleteCardIdeasController,
  getCardIdeasController,
  updateCardIdeasController,
} from "../controllers/cardIdeasController.js";
const router = express.Router();

router.post("/", createCardIdeasController);
router.get("/", getCardIdeasController);
router.patch("/update/:id", updateCardIdeasController);
router.delete("/delete/:id", deleteCardIdeasController);
export default router;
