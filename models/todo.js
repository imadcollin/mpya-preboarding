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

const todoSchema = new mongoose.Schema({
  title: String, 
  completed: Boolean
}
)

const todoModel = mongoose.model("Todo", todoSchema) 

module.exports = todoModel