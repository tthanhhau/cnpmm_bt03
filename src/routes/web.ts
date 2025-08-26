import { Router } from "express";
import {
  showCrudForm, createNewUser, displayGetCRUD,
  getEditPage, updateUser, deleteUser
} from "../controllers/homeController";

const router = Router();

router.get("/", (_req, res) => res.redirect("/crud"));
router.get("/crud", showCrudForm);
router.post("/crud-user", createNewUser);

router.get("/users", displayGetCRUD);
router.get("/edit-user", getEditPage);
router.post("/update-user", updateUser);
router.get("/delete-user", deleteUser);

export default router;
