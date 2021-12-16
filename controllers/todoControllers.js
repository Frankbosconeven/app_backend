const {response} = require("express");
const {Todo} = require("../models/todo");

//create a get all todo controller
const getAllTodo = (req,res) =>{
    Todo.find()
    .then((response) => {
        res.staua(200).send("response");
    }).catch((err) => {
        res.status(500).send("an error occure");
    });
    res.send("Get all todo");

}
 
const getTodoById =(req,res) => {
    const   id = req.params.id


    Todo.find(id)
    .then(response => {
    res.staua(200).send(response);
    }) 
    .catch((err) => {
        res.staua(200).send("an error occured")
    });
};

const createTodo = (req,res)=>{
    const todo = new Todo(req.body);

    todo.save() .then(response => {
        res.staua(201).send(response)
    }) .catch(err =>{
        res.staua(500).send("an error occured");
    })
}


const deleteTodo = (req,res) => {
    const id = req.params.id;

    Todo.findByIdAndDelete({_id: id}, req.body)
    .then(response => {
        res.staua(200).send("Todo with specified ID delete");
    })
    .catch(err =>{
        res.staua(500).send(" an error occured");
    })
}

const updateTodo = (req,res) => {
    const id = req.params.id;

    todo.updateTodoById(id) .then(response => {
        res.send("Todo specifie ID update")
    }) .catch(err =>{
        res.send("an error whiles updating");
        });
}

res.send("Get all todo");
module.exports = {
    getAllTodo,
    getAllTodoById,
    createTOdo,
    deleteTodo,
    updateTodo,
};