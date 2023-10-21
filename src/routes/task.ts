import { Router } from "express";
import { getTask, deleteTask, getTasks, postTask, updateTask } from "../controllers/task";
const router = Router();

router.get("/", getTasks);
router.get("/:id", getTask);
router.post("/", postTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export { router };