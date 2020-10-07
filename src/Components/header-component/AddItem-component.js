import React from "react";
import TextField from "@material-ui/core/TextField";
import AddIcon from "./Add-icon";
const Add = ({
  items,
  addItem,
  title,
  creator,
  onTextChanged,
  onCreatorChanged,
  handle,
}) => {
  const clicks = () => {
    addItem({ title, creator });
    handle(true);
  };
  return (
    <div>
      <header className="App-header"></header>
      <div>
        <TextField
          onChange={(e) => onTextChanged(e.target.value)}
          id="outlined-search"
          label="Title"
          type="search"
          variant="outlined"
        />
        <TextField
          onChange={(e) => onCreatorChanged(e.target.value)}
          id="outlined-search"
          label="Creator"
          type="search"
          variant="outlined"
        />
        <div>
          <span onClick={() => clicks()}>
            <AddIcon></AddIcon>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Add;
