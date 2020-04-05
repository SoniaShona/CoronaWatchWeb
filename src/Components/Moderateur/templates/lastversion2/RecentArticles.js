import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import { Scrollbars } from 'react-custom-scrollbars';

import Tooltip from '@material-ui/core/Tooltip';
import FilterListIcon from '@material-ui/icons/FilterList';
import RefreshIcon from '@material-ui/icons/Refresh';
import StyledBadge from '@material-ui/core/Badge';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    boxShadow: '0px 2px 23px -14px rgba(0,0,0,0.75)',
    width:'98%',
    marginLeft:'1.7%',
    borderRadius:'3px',
  },
  customisedScrollbar:{

  },
  demo: {
    backgroundColor: '#ffffff',
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

function generate(element) {
  return [0, 1, 2,3,4,5,6,7,8].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export default function InteractiveList() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
      <Grid className={classes.root} container >
        <Grid style={{width:'100%'}}>
          <div style={{width:'95%', marginLeft:'5%',display:'flex',}}>
            <div style={{width:'60%',display:'flex'}}>
              <Typography variant="h6" className={classes.title}>
                Avatar yes yes yes
              </Typography>
            </div>
            <div style={{width:'40%', display:'flex',}}>
              <StyledBadge badgeContent={4} color="secondary" style={{marginTop:'47px',marginLeft: '51%'}}></StyledBadge>
              <IconButton aria-label="filter list" style={{marginTop:'31px', marginLeft: '10%', width:'35px', height:'35px'}}>
                <RefreshIcon/>
              </IconButton>
            </div>
          </div>
          <div className={classes.demo}>
          <Scrollbars style={{ height: 300,}} >
            <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    secondary="Secondary text"
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" style={{left:'-5px' }}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>,
              )}
            </List>
          </Scrollbars>
          </div>
        </Grid>
      </Grid>
    
  );
}

