const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 4000;
const db = require("./models/");
const  config = require("./config/");

const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());


//mongodb://admin12:admin12@ds041563.mlab.com:41563/todo?retryWrites=false 


// function success(res, payload) {
//   return res.status(200).json(payload);
// }

// app.get("/todos", async (req, res, next) => {
//   try {
//     const todos = await db.Todo.find({});
//     return success(res, todos);
//   } catch (err) {
//     next({ status: 400, message: "failed to get hhhhh" });
//   }
// });

// app.post("/todos", async (req, res, next) => {
//   try {
//     const todo = await db.Todo.create(req.body);
//     console.log("*......*");
//     console.log(todo);
//     return success(res, todo);
//   } catch (err) {
//     next({ status: 400, message: "failed to hhh todo" });
//   }
// });


// app.put("/todos/:id", async (req, res, next) => {
//   try {
//     const todo = await db.Todo.findByIdAndUpdate(req.params.id, req.body, {
//       new: true
//     });
//     return success(res, todo);
//   } catch (err) {
//     next({ status: 400, message: "failed to update todo" });
//   }
// });
// app.delete("/todos/:id", async (req, res, next) => {
//   try {
//     await db.Todo.findByIdAndRemove(req.params.id);
//     return success(res, "todo deleted!");
//   } catch (err) {
//     next({ status: 400, message: "failed to delete todo" });
//   }
// });

// app.use((err, req, res, next) => {
//   return res.status(err.status || 400).json({
//     status: err.status || 400,
//     message: err.message || "there was an error processing request"
//   });
// });

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});