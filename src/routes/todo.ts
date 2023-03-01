import Router from "express";
import { createTodo, deleteTodo, getTodo, updateTodo } from '../controller/todo';

const router = Router();

router.get("/", getTodo);
router.post("/", createTodo);
router.patch("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;