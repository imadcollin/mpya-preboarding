import React, { useState } from "react";

const Add = ({ items, addItem }) => {
  const [text, seText] = useState("");

  return (
    <div style={{ backgroundColor: "red" }}>
      <header className="App-header">
        <div>
        <input name="inputText" onChange={(e) => seText(e.target.value)} /> <button onClick={() => addItem({ text })}>Add</button>
        </div>
      </header>
    </div>
  );
};

export default Add;
