import { Router } from "express";
import {
  authUser,
  getUserById,
  registerUser,
  updateUser,
} from "../controllers/user.controller";

const router = Router();

router.post("/login", authUser);
router.post("/register", registerUser);
router.get("/:id", getUserById);
router.put("/:id", updateUser);

export default router;
