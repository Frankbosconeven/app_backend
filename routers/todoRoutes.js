const express = require("express");
const { createTOdo } = require("../controller/todocontrollers");
const {getAllTodo , getAllTodoById, createTOdo, deleteTodo, updateTodo}  = require("../controllers/todocontrollers");

//define router features from export
const router = express.Router();

router.get("/getAllTodos", getAllTodos);
router.get("/getAllTodoById/:id", getAllTodoById);
router.post("/createTodo", createTOdo);
router.delete("/deleteTodo/:id", deleteTodo);
router.put("/udateTodo/:id",udateTodo);

module.exports = router