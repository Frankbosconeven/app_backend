const express = require("express");
const { createTodo } = require("../controller/todocontrollers");
const {getAllTodo , getAllTodoById, createTodo, deleteTodo, updateTodo}  = require("../controllers/todocontrollers");

//define router features from export
const routers = express.routers();

routers.get("/getAllTodos", getAllTodo);
routers.get("/getAllTodoById/:id", getAllTodoById);
routers.post("/createTodo", createTodo);
routers.delete("/deleteTodo/:id", deleteTodo);
routers.put("/udateTodo/:id",udateTodo);

module.exports = routers