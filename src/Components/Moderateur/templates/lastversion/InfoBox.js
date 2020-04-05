import React from "react";
import clsx from 'clsx';
import PropTypes from "prop-types";
import CountUp from "react-countup";
import Paper from "@material-ui/core/Paper";
import { grey, cyan } from "@material-ui/core/colors";
import { makeStyles } from '@material-ui/styles';
import ThumbUp from "@material-ui/icons/ThumbUp";


const useStyles = makeStyles(theme => ({
    content: {
        padding: "5px 10px",
        marginLeft: 90,
        height: 90
      },
      number: {
        display: "block",
        fontWeight: 400,
        fontSize: 18,
        color: grey[800]
      },
      text: {
        fontSize: 20,
        fontWeight: 300,
        color: grey[800]
      },
      iconSpan: {
        float: "left",
        height: 90,
        width: 90,
        textAlign: "center",
        backgroundColor: '#123432'
      },
      icon: {
        height: 48,
        width: 48,
        marginTop: 20,
        maxWidth: "100%"
      }
}));

export default function InfoBox() {
  const { className, ...rest } = PropTypes;
  const classes = useStyles();

    return (
      <Paper>
        <span className={classes.iconSpan}>
          <div style={{ color: "white" }}>
            <ThumbUp className={classes.icon} />
          </div>
        </span>
        <div className={classes.content}>
          <span className={classes.text}>likes</span>
          <div className={classes.number}>
            <CountUp end='2343' separator="," duration={2} />
          </div>
        </div>
      </Paper>
    );
}

InfoBox.propTypes = {
  className: PropTypes.string
};


