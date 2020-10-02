import React, { useState } from "react";

const Add = ({ items, addItem,text ,creator ,onTextChanged,onCreatorChanged}) => {

  return (
    <div style={{ backgroundColor: "red" }}>
      <header className="App-header">
        <div> 
        <input name="inputText" onChange={(e) => onTextChanged(e.target.value)} /> 
        <input name="inputText2" onChange={(e) => onCreatorChanged(e.target.value)} /> 
      
        <button onClick={() => addItem({ text,creator })}>Add</button>
        </div>
      </header>
    </div>
  );
};

export default Add;
