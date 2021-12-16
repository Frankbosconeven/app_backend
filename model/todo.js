const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: {
        type: String,
        require: true,
    },

    decription: {
        type: String,
        required: true,
    },

    Date: {
        type: String,
        required: true,
    },

    time: {
        type: String,
        required: true,
    },
},
 {timestamps: true}
);

const todo = mongoose.model("Todo", todoSchema);

module.exports = {Todo};