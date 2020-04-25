import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Moderateur from './Moderateur/Moderateur'
import Redacteur from './Redacteur/Redacteur'
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

export default function gestionnaire() {

    function handleContent(index){
        document.getElementById('menuChoix').style.display='none';
        if(index===0){
            document.getElementById('Moderateur').style.display='block';
        }
        else{
            document.getElementById('Redacteur').style.display='block';
        }
    }
     
  return (
    
    <div>
        <div id='menuChoix' style={{backgroundColor:'#F0F0FA', paddingTop:'10%', paddingLeft:'40%', position: 'fixed', height:'100%', width:'100%'}}> 
        <Grid item lg={4} md={4} xl={6} xs={6} style={{backgroundColor:'#fff', border: '1px solid #CCCCDD', borderRadius:'5px', paddingTop:'5%', paddingBottom:'5%'}}>
            <List >
                <ListItem button key='0' className={'menuItem1'} onClick={event => handleContent(0)} >
                    <ListItemAvatar>
                    <Avatar src='../../images/face16.jpg'/>
                    </ListItemAvatar>
                    <ListItemText  primary='Moderateur'/> 
                </ListItem>
                <ListItem button key='1' className={'menuItem1'} onClick={event => handleContent(1)} >
                    <ListItemAvatar>
                        <Avatar src='../../images/face1.jpg'/>
                    </ListItemAvatar>
                    <ListItemText  primary='Redacteur'/> 
                </ListItem>
            </List>          
        </Grid>    
       </div>
       <div style={{display:'none'}} id='Moderateur'>
            <Moderateur />
       </div>
       <div style={{display:'none'}} id='Redacteur'>
            <Redacteur/> 
       </div>
    </div>
    
  );
}


