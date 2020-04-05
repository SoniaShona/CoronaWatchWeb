import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import CountUp from "react-countup";
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    borderLeft: '5px solid #426FEB',
    boxShadow: '0px 2px 23px -14px rgba(0,0,0,0.75)',
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700,
    marginLeft: '-20px'
  },
  avatar: {
    backgroundColor: '#ff2233',
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  difference: {
    marginTop: 'theme.spacing(2)',
    display: 'flex',
    alignItems: 'center'
  },
  differenceIcon: {
    color: 'theme.palette.error.dark'
  },
  differenceValue: {
    color: '#ff3322',
    marginRight: 'theme.spacing(1)'
  }
}));

export default function Budget() {
  const { className, ...rest } = PropTypes;
  const classes = useStyles();

  return (
    <Card 
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="body2"
            >BUDGET</Typography>
            <Typography variant="h5">$<CountUp end='2343' separator="," duration={2} /></Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <MoneyIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
        <div className={classes.difference}>
          <ArrowDownwardIcon className={classes.differenceIcon} />
          <Typography
            className={classes.differenceValue}
            variant="body2"
          >
            12%
          </Typography>
          <Typography
            className={classes.caption}
            variant="caption"
          >
            Since last month
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

Budget.propTypes = {
  className: PropTypes.string
};


