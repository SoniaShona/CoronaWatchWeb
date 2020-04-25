import React from 'react';
import Grid from '@material-ui/core/Grid';
import ListeDesArticles from './listeDesArticles/ListeDesArticles'
import ArticleCard from './article/ArticleCard'

export default function PersistentDrawerLeft() {
  return (
    <Grid container spacing={3}>
        <Grid item lg={6} md={6} xl={3} xs={12}>
          <ArticleCard/>
        </Grid>
        <Grid item lg={6} md={12} xl={9} xs={12}>
          <ListeDesArticles/> 
        </Grid>
        </Grid>
  );
}
