import express from "express";
import { Router } from "express";

import { index } from "../../infrastructure/controller/ticketController.js";
const router = Router();

router.get("/", index);

export default router;
