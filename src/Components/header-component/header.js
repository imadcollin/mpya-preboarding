import React, { Component } from "react";
import "./header.css";
import Moment from "react-moment";
import Container from '@material-ui/core/Container';

class Header extends Component {
  render() {
    const date = new Date();

    return (
      <div className="header-style">
        <h1>This is a header</h1>

        <br />
        <Container maxWidth="sm">

          <h1 style={{ color: "black", backgroundColor: "#fff" }}>test</h1>

          <span className="today">
            <Moment format="dddd">{this.props.dateToFormat}</Moment>
          </span>
          <span className="day">
            <Moment format="DD">{this.props.dateToFormat}</Moment>
          </span>
          <span className="month">
            <Moment format="MMM">{this.props.dateToFormat}</Moment>
          </span>
          <span className="year">
            <Moment format="YY">{this.props.dateToFormat}</Moment>
          </span>
        </Container>
      </div>
    );
  }
}

export default Header;
