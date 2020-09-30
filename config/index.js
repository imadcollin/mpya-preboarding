const mongo = require("mongodb");
const { update } = require("../models/todo");
const url =
  "//mongodb://admin12:admin12@ds041563.mlab.com:41563/todo?retryWrites=false";

mongo.connect(url, { useNewUrlParser: true }, (err, db) => {
  if (err) {
    console.log(err);
    process.exit(0);
  }
  console.log("database connected!");
  var dbo = db.db("todo");

  var collection = dbo.collection("items");

  find(collection);
  // add(collection);
  //updateEntity(collection);
  //deleteEnitity(collection);
  db.close();
});

const add = (collection) => {
  let data = [{ id: 3, title: "Java", creator: "Ali" }];
  collection.insertMany(data, (err, result) => {
    if (err) {
      console.log(err);
      process.exit(0);
    }
    console.log(result);
  });
};

const find = (collection) => {
  collection.find().toArray((err, results) => {
    if (err) {
      console.log(err);
      process.exit(0);
    }
    console.log(results);
  });
};

const deleteEnitity = (collection) => {
  collection.deleteOne({ title: "Java" }, (err, results) => {
    if (err) {
      console.log(err);
      process.exit(0);
    }
    console.log(results);
  });
};

const updateEntity = (collection) => {
  collection.updateOne(
    { title: "Java" },
    { $set: { title: "C++" } },
    (err, results) => {
      if (err) {
        console.log(err);
        process.exit(0);
      }
      console.log(results);
    }
  );
};
