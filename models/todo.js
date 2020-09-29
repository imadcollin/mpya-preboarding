const mongoose = require("mongoose") 


let test = [{
title: {
	type:String, 
	unique: true, 
    required: true, 
},
completed: {
    type: Boolean, 
    default: false, 
  }
}]

const todoSchema = new mongoose.Schema(test
)

const todoModel = mongoose.model("Todo", todoSchema) 

module.exports = todoModel