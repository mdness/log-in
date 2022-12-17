import { Router } from "express";
const router = Router();
import {
  logout,
  session,
  log,
  logget,
} from "../controllers/controller.js";
import { loginmiddle } from "../middlewares/middlewares.js";

router.post("/login", log);

router.get("/", logget);

router.get("/home", loginmiddle, session);

router.get("/logout", logout);

export default router;