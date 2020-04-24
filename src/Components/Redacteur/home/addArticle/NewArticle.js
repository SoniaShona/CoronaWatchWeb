import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Form from './addform' ;






export default function NewArticle() {


  const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
    },
    media: {
      height: '100px',
      width : '50%',
      margin: theme.spacing(1),
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    table: {
      width: '100%',
    },
    button: {
      margin: theme.spacing(2),
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
  }));
  const classes = useStyles() ;

  

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
      <div class="card-header text-center">
            <div class="text-black text-center">
              <h3> Ajouter un nouvel article</h3>
            </div>
          </div>
          <Form style={classes}></Form>
        
      </Paper>
    </div>
    

  );
}