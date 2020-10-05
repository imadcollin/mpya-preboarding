import React from "react";
import "./header.css";
import Moment from "react-moment";
import Container from "@material-ui/core/Container";

import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";

export default function Header() {
  const date = new Date();

  return (
    <div className="header-style">
      <h1>This is a header</h1>

      <div className="grid">
        <span className="grid-item item1">
          <Moment format="DD">{date}</Moment>
        </span>
        <span className="grid-item item2">
          <Moment format="MMM">{date}</Moment>
        </span>
        <span className="grid-item item3">
          <Moment format="YYYY">{date}</Moment>
        </span>
        <span className="grid-item item4">
          <Moment format="dddd">{date}</Moment>
        </span>
      </div>
    </div>
  );
}
