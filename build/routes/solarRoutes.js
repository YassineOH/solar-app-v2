import express from "express";
import { getYearlyYield } from "../controllers/solarController.js";
const router = express.Router();
router.post("/yearly-yield", getYearlyYield);
export default router;
//# sourceMappingURL=solarRoutes.js.map