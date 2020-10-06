import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { green } from "@material-ui/core/colors";
import Icon from "@material-ui/core/Icon";

const AddIcon = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
    
    },
  }));

  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <button style={{border:'none' , backgroundColor:'initial'}}>
        <Icon
          style={{ color: green[500], fontSize: "3rem" }}> add_circle</Icon></button>
      </div>
    </div>
  );
};

export default AddIcon;
