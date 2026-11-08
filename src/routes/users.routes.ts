import { Router } from "express";
import {
  authUser,
  deleteUser,
  getUserById,
  getUsers,
  logoutUser,
  registerUser,
  updateUser,
} from "../controllers/user.controller";
import { admin, protect } from "../middleware/auth.middleware";

const router = Router();

router.post("/login", authUser);
router.post("/logout", protect, logoutUser);
router.post("/register", registerUser);
router.route("/").get(protect, admin, getUsers);
router
  .route("/:id")
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser)
  .delete(protect, admin, deleteUser);

export default router;
