import React, { useState, useEffect } from "react";
import Header from "./Components/header-component/Header-component";
import Add from "./Components/header-component/AddItem-component";
import TodoList from "./Components/header-component/TodoList-component";
import "./App.css";

import Crud from "./Crud";
import MockApi from "./MockApi";

const App = () => {
  const [items, setItems] = useState([]);
  const [titleState, setTitle] = useState("");
  const [creatorState, setCreator] = useState("");

  useEffect(() => {
    const fetchGetAllItems = async () => {
      const items = await MockApi.getAllItems();

      setItems(items);
    };
    fetchGetAllItems();
  }, []);
  {
    /************************************************************ */
  }

  const deleteItem = (id) => {
    setItems((prev) => {
      return prev.filter((prev) => prev.id !== id);
    });
  };
  {
    /************************************************************ */
  }
  const addItem = ({ title, creator }) => {
    if (!title) {
      alert("Please type something... ");
    } else {
      const item = MockApi.createItem(title, creator);
      setItems((prev) => {
        return [item, ...prev];
      });
    }
  };
  {
    /************************************************************ */
  }
  const update = (id, title, creator, index) => {
    if (!title) {
      alert("Please type something... ");
    }
    console.log("creator:", creator);
    console.log("title:", title);

    const found = items.filter((x) => x.id == id); //true false
    let newItems = [...items];
    newItems[index].creator = creatorState;
    newItems[index].title = titleState;
    setItems(newItems);
  };
  {
    /************************************************************ */
  }
  return (
    <div className="App">
      <header className="App-header"></header>

      {/************************************************************ */}
      <div className="app-container">
        <div className="flex-item">
          <Header></Header>

          {items.map((item, index) => (
            <TodoList
              item={item}
              deleteItem={deleteItem}
              update={update}
              index={index}
            ></TodoList>
          ))}
        </div>
      </div>

      <Add
        items={items}
        title={titleState}
        creator={creatorState}
        onTextChanged={setTitle}
        onCreatorChanged={setCreator}
        addItem={addItem}
      ></Add>

      {/* <Crud></Crud> */}
    </div>
  );
};

export default App;
