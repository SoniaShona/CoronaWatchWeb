import React from 'react' ;
import ReactDOM from 'react-dom';
import axios from 'axios' ;
import NotifsUsers from './NotificationUsers';




export default class getCommentsDataFile extends React.Component{

    state = {
        comments : []
    }

    componentDidMount (){
        axios.get(`https://corona-watch-esi.herokuapp.com/content/comments/`)
      .then(res => {
        const commentlist = res.data;
    
        
        this.setState({
          comments : this.state.comments.concat(commentlist)
        }
         );
         
      })

      
      
  }

  render() {
    return (
      <NotifsUsers {...this.state}/>
    )
  }
}