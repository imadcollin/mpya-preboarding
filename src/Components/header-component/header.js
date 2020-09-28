import React, { Component } from "react";
import "./header.css";
import Moment from "react-moment";
import Container from "@material-ui/core/Container";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bullet: {
    display: "inline-block",
    margin: "0px",
    transform: "scale(0.8)",
  },
}));

export default function Header() {
  const classes = useStyles();
  const date = new Date();

  return (
    <div className="header-style">
      <h1>This is a header</h1>

      <br />
      <Container maxWidth="sm">
        <h2>Grid container</h2>
        <Grid container>
          <Grid item xs={2}>
            <span
              className="day"
              style={{
                textAlign: "right",
                fontSize: "80px",
                fontFamily: "bold",
              }}
            >
              <Moment format="DD">{date}</Moment>
            </span>
          </Grid>

          <Grid item xs={2}>
            <Typography variant="h5" component="h1">
              <span className="month">
                <Moment format="MMM">{date}</Moment>
              </span>
            </Typography>

            <h2 className="year">
              <Moment format="YYYY">{date}</Moment>
            </h2>
          </Grid>

          <Grid item xs={8}>
            <h1 className="dd" style={{ lineHeight: "2.5" }}>
              <Moment format="dd">{date}</Moment>
            </h1>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
