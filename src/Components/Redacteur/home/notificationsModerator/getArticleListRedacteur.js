import React from 'react' ;
import axios from 'axios' ;
import NotifsModerator from './NotificationsModerator';



export default class getArticleListDataFile extends React.Component{

    state = {
        articles : []
    }

    componentDidMount (){
        axios.get(`https://corona-watch-esi.herokuapp.com/content/articles/`)
      .then(res => {
        const article = res.data;
    
        
        this.setState({
          articles : this.state.articles.concat(article)
        }
         );
         console.log(this.state.articles) ;
      })
      
  }

  render() {
    return (
     <NotifsModerator {...this.state}/>
    )
  }
}