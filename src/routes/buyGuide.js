import express from "express";
import {
    createCardBuyerGuideController, deleteCardBuyerGuideController, getCardBuyerGuideController
  } from "../controllers/cardBuyerGuide.js";
const router = express.Router();

router.post("/", createCardBuyerGuideController);
router.get("/", getCardBuyerGuideController);
router.delete("/delete/:id", deleteCardBuyerGuideController);
export default router;