import React, { useState } from "react";
import Header from "./Components/header-component/Header-component";
import Add from "./Components/header-component/AddItem-component";
import TodoList from "./Components/header-component/TodoList-component";
import "./App.css";

const App = () => {
  let randomId = Math.floor(Math.random() * 10 + 1);
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Breakfast",
    },
    { id: 2, title: "Dinner" },
  ]);
  const deleteItem = (id) => {
    setTodos((prev) => {
      return prev.filter((prev) => prev.id !== id);
    });
  };
  const addItem = ({ text }) => {
    if (!text) {
      alert("Please type something... ");
    } else {
      setTodos((prev) => {
        return [{ id: randomId, title: text }, ...prev];
      });
    }
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <Header></Header>
      <Add items={todos} addItem={addItem}></Add>
      {todos.map((item) => (
        <TodoList item={item} deleteItem={deleteItem}></TodoList>
      ))}
    </div>
  );
};

export default App;
