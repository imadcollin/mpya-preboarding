import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import CancelIcon from "@material-ui/icons/Cancel";
import EditIcon from "@material-ui/icons/Edit";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const TodoList = ({ items, deleteItem, update, index }) => {
  const classes = useStyles();

  return (
    <div>
      <List component="nav" className={classes.root} aria-label="contacts">
        {items.map((item, index) => (
          <ListItem key={index} button>
            <ListItemText  primary={item.title} secondary={item.creator} />{" "}
            <EditIcon
              style={{
                color: "black",
                backgroundColor: "white",
                fontSize: "2rem",
              }}
              onClick={() => update(item.id, item.title, item.creator, index)}
            ></EditIcon>
            <span>&nbsp;&nbsp;</span>
            <CancelIcon
              style={{
                color: "white",
                backgroundColor: "red",
                borderRadius: "50%",
              }}
              onClick={() => deleteItem(item.id)}
            ></CancelIcon>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TodoList;
