import express from "express";
import {
  getAllProduct,
  getByIdProduct,
  createProduct,
  updateByIdProduct,
  deleteByIdProduct
} from "./product.controller.js";

const router = express.Router();

router.get("/", getAllProduct);
router.get("/:id", getByIdProduct);
router.post("/", createProduct);
router.put("/:id", updateByIdProduct);
router.delete("/:id", deleteByIdProduct);

export default router;
