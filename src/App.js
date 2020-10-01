import React, { useState, useEffect } from "react";
import Header from "./Components/header-component/Header-component";
import Add from "./Components/header-component/AddItem-component";
import TodoList from "./Components/header-component/TodoList-component";
import "./App.css";

import APIHelper from "./ApiConf";

const App = () => {
  let randomId = Math.floor(Math.random() * 10 + 1);
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");

  const [title, setTitle] = useState("");
  const [creator, setCreator] = useState("");

  useEffect(() => {
    const fetchGetAllItems = async () => {
      const todos = await APIHelper.getAllItems();
      setItems(todos);
    };
    fetchGetAllItems();
  }, []);

  const createItem = async (e) => {
    e.preventDefault();
    if (!title) {
      alert("please enter something");
      return;
    }
    if (items.some(({ title }) => title === item)) {
      alert(`Item: ${title} already exists`);
      return;
    }
    const newItem = await APIHelper.createItem(title, creator);
    setItems([...items, newItem]);
  };
  {
    /************************************************************ */
  }

  const deleteItem = async (e, id) => {
    try {
      e.stopPropagation();
      await APIHelper.deleteItem(id);
      setItems(items.filter(({ _id: i }) => id !== i));
    } catch (err) {}
  };
  {
    /************************************************************ */
  }

  const updateItem = async (e, id) => {
    e.stopPropagation();
    const payload = {
      completed: !items.find((item) => item._id === id).completed,
    };
    const updatedTodo = await APIHelper.updateItem(id, payload);
    setItem(items.map((item) => (item._id === id ? updatedTodo : item)));
  };
  {
    /************************************************************ */
  }

  return (
    <div className="App">
      <header className="App-header"></header>
      <h1>test</h1>
      {/* 
      <div>
  {todos.map((item, index) => {
   return <div key={index}>
--note the name property is primitive---{item.name}</div>;
  })}

</div> */}

      {/*
      <Header></Header>
      <Add items={todos} addItem={addItem}></Add>
      {todos.map((item) => (
        <TodoList item={item} deleteItem={deleteItem}></TodoList>
      ))}
      */}
      {/************************************************************ */}
      <div>
        <input
          id="todo-input"
          type="text"
          value={item.title}
          onChange={({ target }) => setTitle(target.value)}
        />
        <input
          id="creator-input"
          type="text"
          value={item.creator}
          onChange={({ target }) => setCreator(target.value)}
        />

        <button type="button" onClick={createItem}>
          Add
        </button>
      </div>
      {/************************************************************ */}
      <ul>
        {items.map(({ id, title, creator }, i) => (
          <li key={i} onClick={(e) => updateItem(e, id)}>
            <span onClick={(e) => deleteItem(e, id)}>
              {title} {creator}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
