import { Router } from "express";
import { accountSearch } from "../Controller/cvConsulta.controller.js";

const router = Router();

router.get("/healthCheck", (req, res) => {
  return res.json({
    api: "v1",
    status: "up",
  });
});

router.post("/accountSearch", accountSearch);
router.post("/accountsByNumber", accountSearch);

export default router;
