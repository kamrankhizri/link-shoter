import express from "express";
import {
  getAllUsers,
  getByIdUsers,
  createUser,
  updateByIdUsers,
  deleteByIdUsers
} from "./users.controller.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getByIdUsers);
router.post("/", createUser);
router.put("/:id", updateByIdUsers);
router.delete("/:id", deleteByIdUsers);

export default router;
