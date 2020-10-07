import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import CancelIcon from "@material-ui/icons/Cancel";
import EditIcon from "@material-ui/icons/Edit";
import APIHelper from "./ApiConf";
import AddIcon from "./Components/header-component/Add-icon";

import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const Crud = () => {
  const classes = useStyles();

  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");
  const [creator, setCreator] = useState("");
  
  useEffect(() => {
    const fetchGetAllItems = async () => {
      const items = await APIHelper.getAllItems();
      setItems(items);
    };
    fetchGetAllItems();
  }, []);

  const createItem = async (e) => {
    e.preventDefault();
    if (!title) {
      alert("please enter something");
      return;
    }
  
    const newItem = await APIHelper.createItem(title, creator);
    setItems([...items, newItem]);
  };

  const deleteItem = async (e, id) => {
    try {
      e.stopPropagation();
      await APIHelper.deleteItem(id);
      setItems(items.filter(({ _id: i }) => id !== i));
    } catch (err) {}
  };

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

  return (
    <div>
      {/************************************************************ */}
      <div>
        <List component="nav" className={classes.root} aria-label="contacts">
          {items.map(({ _id, title, creator }, i) => (
            <ListItem key={i} button>
              <ListItemText primary={title} secondary={creator} />{" "}
              <EditIcon
                style={{
                  color: "black",
                  backgroundColor: "white",
                  fontSize: "2rem",
                }}
                onClick={(e) => updateItem(e, _id)}
              ></EditIcon>
              <span>&nbsp;&nbsp;</span>
              <CancelIcon
                style={{
                  color: "white",
                  backgroundColor: "red",
                  borderRadius: "50%",
                }}
                onClick={(e) => deleteItem(e, _id)}
              ></CancelIcon>
            </ListItem>
          ))}
        </List>
      </div>

      {/************************************************************ */}

      <div>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          id="outlined-search"
          label="Title"
          type="search"
          variant="outlined"
        />
        <TextField
          onChange={(e) => setCreator(e.target.value)}
          id="outlined-search"
          label="Creator"
          type="search"
          variant="outlined"
        />
        <div>
          <span onClick={createItem}>
            <AddIcon> </AddIcon>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Crud;
