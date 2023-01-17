import express from "express";
import { registerClientRequest } from "../controllers/requestController.js";
const router = express.Router();
router.post("/client-request", registerClientRequest);
export default router;
//# sourceMappingURL=requestRoutes.js.map