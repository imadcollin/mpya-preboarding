import React from "react";
import "./header.css";
import Moment from "react-moment";
export default function Header() {
  const date = new Date();

  return (
    <div className="header-style">

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
