import { Router } from "express";
import { TaskController } from "../controllers/task.controllers";

const router = Router();

router.get("/", TaskController.getAll);
router.post("/", TaskController.create);
router.put("/:id", TaskController.update);
router.delete("/:id", TaskController.delete);
router.post("/:id/duplicate", TaskController.duplicate);

export default router;
