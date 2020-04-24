import React from 'react' ;
import ReactDOM from 'react-dom';
import axios from 'axios' ;
import ArticlesList from './listeArticles';



export default class getArticleListDataFile extends React.Component{

    state = {
        articles : []
    }

    componentDidMount (){
        axios.get(`https://corona-watch-esi.herokuapp.com/content/articles-verified/`)
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
     <ArticlesList {...this.state}/>
    )
  }
}