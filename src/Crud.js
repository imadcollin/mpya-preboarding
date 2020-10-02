import React, { useState, useEffect } from "react";
import APIHelper from "./ApiConf";

const Crud = () => {
  let randomId = Math.floor(Math.random() * 10 + 1);
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");
  const [title, setTitle] = useState("");
  const [creator, setCreator] = useState("");
  {
    /************************************************************ */
  }

  useEffect(() => {
    const fetchGetAllItems = async () => {
      const todos = await APIHelper.getAllItems();
      setItems(todos);
    };
    fetchGetAllItems();
  }, []);

  {
    /************************************************************ */
  }
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
    let payload = { title: "Untitled", creator: "Undefined" };

    console.log(id);
    e.stopPropagation();
    if (items.find((item) => item._id === id)) {
      payload = {
        title: title,
        creator: creator,
      };
    }
    const updatedTodo = await APIHelper.updateItem(id, payload);
    setItems(items.map((item) => (item._id === id ? updatedTodo : item)));
  };

  {
    /************************************************************ */
  }

  return (
    <div>
      <h1>Read, create, update , delete </h1>
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
        {items.map(({ _id, title, creator }, i) => (
          <li key={i}>
            {i + 1}- {title} - {creator}
            <button onClick={(e) => updateItem(e, _id)}>Update Item</button>
            <button onClick={(e) => deleteItem(e, _id)}>Delete Item</button>
          </li>
        ))}
      </ul>
      {/************************************************************ */}
    </div>
  );
};

export default Crud;
