const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 4000;
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());

var ObjectID = require("mongodb").ObjectID;
/********************************************************** */

const db = require("./config/driver");

db.initialize("todo", "items", function (dbCollection) {
  dbCollection.find().toArray(function (err, result) {
    if (err) throw err;
    console.log(result);
  });

  /********************************************************** */
  app.get("/items", async (req, res, next) => {
    dbCollection.find().toArray((error, result) => {
      if (error) throw error;
      res.json(result);
    });
     return success(res, item);
  });

  /********************************************************** */
  app.post("/items", async (req, res, next) => {
    const item = req.body;
    dbCollection.insertOne(item, (error, result) => {
      if (error) throw error;
      return success(res, item);
    });
  });
  /********************************************************** */

  app.get("/items/:id", async (req, res, next) => {
    const itemId = req.params.id;
    console.log("found");
    console.log(itemId);
    const item = dbCollection.findOne({ id: itemId }, (error, result) => {
      if (error) throw error;
      return success(res, item);
    });
  });
  /********************************************************** */

  app.delete("/items/:id", async (req, res, next) => {
    try {
      itemId = req.param.id;
      dbCollection.deleteOne({ id: itemId }, function (error, result) {
        return success(res, "item deleted!");
      });
    } catch (err) {
      next({ status: 400, message: "failed to delete todo" });
    }
  });

  /********************************************************** */

  app.put("/items/:id", async (req, res, next) => {
    try {
      dbCollection
        .updateOne(
          { _id: ObjectID(req.body._id) },
          { $set: { name: req.body.title, creator: req.body.creator } },
          { upsert: true }
        )

        .catch((err) => {
          console.log("Error: " + err);
        });
    } catch (err) {
      next({ status: 400, message: "failed to update todo" });
    }
  });
  /********************************************************** */
});

function success(res, payload) {
  return res.status(200).json(payload);
}
/********************************************************** */

app.use((err, req, res, next) => {
  return res.status(err.status || 400).json({
    status: err.status || 400,
    message: err.message || "there was an error processing request",
  });
});

/********************************************************** */
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
