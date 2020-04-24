import React from 'react';
import Fragment from 'react' ;
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Button from '@material-ui/core/Button';
import mock from '../data' ;
import axios from 'axios' ;



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    boxShadow: '0px 2px 23px -14px rgba(0,0,0,0.75)',
    borderRadius:'5px',
    marginBottom : '10px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  avatarCommentaire: {
    backgroundColor: red[500],
    marginTop:'25px'
  },
}));


export default function RecipeReviewCard(props) {
  var { articles } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  

  return (
    <>
    {articles.map(stat => (
    <Card className={classes.root}>
      <CardHeader style={{textAlign:'left'}}
        avatar={
          <Avatar src={stat.photoProfilRedacteur} aria-label="recipe" className={classes.avatar}>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={ stat.writer.first_name +' '+ stat.writer.last_name}
        subheader={stat.timestamp}
      />
      <CardContent>
        <Typography variant="h6" style={{textAlign:'right', paddingBottom:'2%'}} >
        {stat.title}
        </Typography> 
        <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:'right'}}>
        {stat.content}</Typography>
      </CardContent>
      <Grid container spacing={1} style={{padding:'3%',}}>
        {stat.images.map(stat1 => (
            <Grid item lg={6} md={6} xl={3} xs={12}>
            <CardMedia 
            className={classes.media}
            image={stat1.content}
            title="image"
            />
            </Grid>  
        ))}
      </Grid>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:'right'}}>
        {//stat.jaime
        }
        </Typography>
        <IconButton aria-label="share">
          <ChatBubbleIcon />
        </IconButton>
        <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:'right'}}>
        {stat.comments.length}</Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit style={{borderTop:'1px solid #DDDDDD', paddingBottom:'30px'}}>
        {stat.comments.map(stat2 => (
          <Grid container spacing={2} style={{padding:'3%', textAlign:'left',paddingBottom:'0px'}}>
          <Grid item md={1} lg={1}>
            <Avatar src={stat2.photoProfilUtilisateur} aria-label="Photo de profile" >
            </Avatar>
          </Grid>
          <Grid container item md={11} lg={11}>
            <Grid item style={{maxWidth:'80%', marginLeft:'3%'}}>
              <Typography variant="h6" style={{fontSize:'14px'}}>
                {
                stat2.user
                }
                </Typography>
              <Button style={{backgroundColor:'#EEEEEE', borderRadius:'20px', paddingLeft:'10px', paddingRight:'10px',textAlign:'left'}}>
                {stat2.content}
              </Button>
              <Typography variant="h6" style={{marginLeft:'20px', fontSize:'14px', color:'#888888'}}>
                {
                //stat2.date
                }
                </Typography>
            </Grid>
            <Grid item>
              <IconButton aria-label="settings" style={{marginTop:'25px', marginLeft:'2px', height:'35px', width:'35px'}}>
                <MoreHorizIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        ))}
      </Collapse>
    </Card>
    ))}
    </>
  );
}
