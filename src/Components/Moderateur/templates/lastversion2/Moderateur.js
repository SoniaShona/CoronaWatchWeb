import React from 'react';
import '../../App.css' ;
import clsx from 'clsx';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import List from '@material-ui/core/List';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PlaceIcon from '@material-ui/icons/Place';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupIcon from '@material-ui/icons/Group';
import PublicIcon from '@material-ui/icons/Public';
import PersonIcon from '@material-ui/icons/Person';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Avatar from '@material-ui/core/Avatar';

import Dashboard from './dashboard/Dashboard';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  navBar:{
    position:'fixed',
    marginTop: '-8px',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor:'#ffffff',
    height: '50px',
    boxShadow: '0px -5px 9px 0px rgba(0,0,0,0.75)',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor:'#ffffff',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuItem: {
    color:'textSecondary',
  },
  menuRow:{
   
  },
  menuClose:{
    color:'#111111',
    position:'absolute',
    right:'1%',
    top:'0.5%',
  },
  title: {
    color:'#111111',
    marginTop:'6.5%',
    marginLeft:'10%',
    width: '130px',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  profilePhoto: {
    marginLeft:'5px',
    marginTop: '2px',
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  search: {
    position: 'relative',
    borderRadius:'3px',
    backgroundColor: fade('#98A2BE', 0.15),
    '&:hover': {
      backgroundColor: fade('#98A2BE', 0.25),
    },
    marginRight: theme.spacing(85),
    left: '-10px',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(2),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color:"action",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    position:'fixed',
    right: '2%',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background:'#ffffff',
    boxShadow: '-5px 52px 9px 0px rgba(0,0,0,0.75)',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  main:{

  },
  content: {
    backgroundColor: fade('#98A2BE', 0.15),
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);



  const handleMenuClose = () => {
    setAnchorEl(null);
   
  };


  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
    </Menu>
  );


  function chooseIncon (index) {
    if (index == 0 ) return (<DashboardIcon/>) ;
    if (index == 1 ) return (<AssignmentIcon /> ) ;
    if (index == 2 ) return (<PlaceIcon/>) ;
    if (index == 3 ) return (<GroupIcon/>) ;
    if (index == 4 ) return (<PublicIcon/>) ;
    if (index == 5 ) return (<InsertChartIcon/>) ;
    if (index == 6 ) return (<PersonIcon/>) ;
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={"toolbar",classes.navBar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon color="action" />
          </IconButton>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon color="action" />
            </div>
            <InputBase 
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 17 new notifications" color="inherit" style={{marginTop:'8px', marginRight:'3px',}}>
              <Badge badgeContent={1} color="secondary">
                <NotificationsIcon color="action" />
              </Badge>
            </IconButton>
            <IconButton className={classes.profilePhoto}
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="action"
            >
              <Avatar alt="Remy Sharp" src="/images/face16.jpg" className={classes.small}/>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div style={{height:'100%',}}>
        <div className={classes.drawerHeader}>
          {
          // ADD a reference to the LOGO HERE 
          <img src="/images/logo.png" height='100'width='100' style={{margin:'40px', marginRight:'55px'}}/>
          }


          
          <IconButton onClick={handleDrawerClose} className={classes.menuClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Accueil','Gestion des articles','Gestion des zones', 'Gestion des postes',
              'Infos des reseaux', 'Statistiques', 'Mon compte'].map((text, index) => (
            <ListItem button key={text} className={classes.menuRow} >
              <ListItemIcon className={classes.menuItem}>
                {chooseIncon(index)}
              </ListItemIcon>
              <ListItemText  primary={text} className={classes.menuItem} /> 
            </ListItem>
          ))}
        </List>
        <Divider />

        <List>
          {[' Déconnexion'].map((text, index) => (
            <ListItem button key={text} className={classes.menuRow}>
              <ListItemIcon className={classes.menuItem}>
                <ExitToAppIcon/>
              </ListItemIcon>
              <ListItemText primary={text} className={classes.menuItem}/> 
            </ListItem>
          ))}
        </List>
        </div>
      </Drawer>
      <main style={{ marginTop: "3.75%"}}
        className={classes.main, clsx(classes.content, {
          [classes.contentShift]: open,
        })} 
      >
        <Dashboard/>
      </main> 
    </div>
  );
}
