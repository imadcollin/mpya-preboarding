import React from "react";
import { green } from "@material-ui/core/colors";
import Icon from "@material-ui/core/Icon";

const AddIcon = () => {
  return (
    <div>
      <div>
        <button style={{ border: "none", backgroundColor: "initial" }}>
          <Icon style={{ color: green[500], fontSize: "3rem" }}>
            {" "}
            add_circle
          </Icon>
        </button>
      </div>
    </div>
  );
};

export default AddIcon;
