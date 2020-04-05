import React from 'react';
import Grid from '@material-ui/core/Grid';
import ArticlesRecents from './articlesRecents/ArticlesRecents'
import Card1 from './card1/Card'
import Card2 from './card2/Card'
import Card3 from './card3/Card'
import Card4 from './card4/Card'
import Map from './map/Map'
import NouveautesReseaux from './nouveautesReseaux/NouveautesReseaux'
import NouvellesZones from './nouvellesZones/NouvellesZones'
import PostsRecents from './postsRecents/PostsRecents'
import mock from './data'

export default function PersistentDrawerLeft() {
  return (
    <Grid container spacing={3}>
        
        {mock.Card1.map(stat => (
          <Grid item xs={12} sm={6} md={3} key={stat.idCard}>
            <Card1 {...stat} />
          </Grid>
        ))}
        {mock.Card2.map(stat => (
          <Grid item xs={12} sm={6} md={3} key={stat.idCard}>
            <Card2 {...stat} />
          </Grid>
        ))}
        {mock.Card3.map(stat => (
          <Grid item xs={12} sm={6} md={3} key={stat.idCard}>
            <Card3 {...stat} />
          </Grid>
        ))}
        {mock.Card4.map(stat => (
          <Grid item xs={12} sm={6} md={3} key={stat.idCard}>
            <Card4 {...stat} />
          </Grid>
        ))}

        <Grid item lg={6} md={6} xl={3} xs={12}>
          
        </Grid>
        <Grid item lg={6} md={12} xl={9} xs={12}>
          <NouvellesZones/>
        </Grid>
        <Grid item lg={4} md={12} xl={9} xs={12}>
          <ArticlesRecents />
        </Grid>
        <Grid item lg={4} md={12} xl={9} xs={12}>
          <PostsRecents />
        </Grid>
        <Grid item lg={4} md={12} xl={9} xs={12}>
          <NouveautesReseaux />
        </Grid>
        </Grid>
  );
}
