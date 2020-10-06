import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { green } from "@material-ui/core/colors";
import Icon from "@material-ui/core/Icon";
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
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
        backgroundColor: "#fff",
        padding: "20%",
      },
    },
  }));

  const classes = useStyles();
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
