import React from 'react';
import Grid from '@material-ui/core/Grid';
import Bud from './Budget'
import NouvellesZones from './NouvellesZones'
import RecentArticles from './RecentArticles'


export default function PersistentDrawerLeft() {
  return (
    <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Bud/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Bud/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Bud/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Bud/>
        </Grid>
        <Grid item lg={6} md={6} xl={3} xs={12}>
        </Grid>
        <Grid item lg={6} md={12} xl={9} xs={12}>
          <NouvellesZones/>
        </Grid>
        <Grid item lg={4} md={12} xl={9} xs={12}>
          <RecentArticles />
        </Grid>
        <Grid item lg={4} md={12} xl={9} xs={12}>
          <RecentArticles />
        </Grid>
        <Grid item lg={4} md={12} xl={9} xs={12}>
          <RecentArticles />
        </Grid>
        </Grid>
  );
}
