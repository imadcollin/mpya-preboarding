import React, { useState, useEffect } from "react";
import Header from "./Components/header-component/Header-component";
import Add from "./Components/header-component/AddItem-component";
import TodoList from "./Components/header-component/TodoList-component";
import "./App.css";

import Crud from "./Crud";
import MockApi from "./MockApi";

const App = () => {
  const [items, setItems] = useState([]);
  const [text, seText] = useState("");
  const [creator, setCreator] = useState("");

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
  const addItem = ({ text,creator }) => {
    if (!text) {
      alert("Please type something... ");
    } else {
      const item = MockApi.createItem(text,creator);
      setItems((prev) => {
        return [item, ...prev];
      });
    }
  };
  {
    /************************************************************ */
  }
  const update = (id, title,creator, index) => {
    if (!title) {
      alert("Please type something... ");
    }
    console.log("creator:");

    const found = items.filter((x) => x.id == id); //true false
    let newItems = [...items];
    newItems[index].title = text;
    newItems[index].creator = creator;
    setItems(newItems);
  };
  {
    /************************************************************ */
  }
  return (
    <div className="App">
      <header className="App-header"></header>
      <h1>test</h1>

      <div>
        {items.map((item, index) => {
          return (
            <div key={index}>
              -- {index}
          {item.title} --- {item.creator}-{" "}
            </div>
          );
        })}
      </div>
      {/************************************************************ */}
      {/* <Header></Header> */}
      <Add
        items={items}
        text={text}
        creator={creator}
        onTextChanged={seText}
        onCreatorChanged={setCreator}

        addItem={addItem}
      ></Add>

      {items.map((item, index) => (
        <TodoList
          item={item}
          deleteItem={deleteItem}
          update={update}
          index={index}
        ></TodoList>
      ))}

      {/* <Crud></Crud> */}
    </div>
  );
};

export default App;
