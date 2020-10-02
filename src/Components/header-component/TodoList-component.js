import React from "react";

const TodoList = ({ item, deleteItem, update, index }) => {
  return (
    <div style={{ backgroundColor: "grey" }}>
      <header className="App-header">
        <ul>
          <li>
  {item.id} - {item.title} -- {item.creator}---{" "}
            <button onClick={() => deleteItem(item.id)}>Delete</button>
            <button onClick={() => update(item.id, item.title, item.creator, index)}>
              Update
            </button>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default TodoList;
