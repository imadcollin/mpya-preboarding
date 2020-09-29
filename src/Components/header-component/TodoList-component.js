import React from "react";

const TodoList = ({ item, deleteItem }) => {
  return (
    <div style={{ backgroundColor: "grey" }}>
      <header className="App-header">
        <ul>
          <li>
            {item.id} - {item.title} -----{" "}
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default TodoList;
