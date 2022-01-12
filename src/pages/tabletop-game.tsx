import Grid from '@mui/material/Grid';
import {tabletopGames} from '../data/tabletop-game';
import React from 'react';
import ReviewCard from '../components/review-card';
import { Helmet } from 'react-helmet';

export default function TabletopGames() {

    return(    
      <>
        <Helmet>
            <title>SylwekFr - Tabletop Games</title>
            <meta name="description" content="Some tabletop games I enjoy to play with friend and I recommend to have a fun time"/>
        </Helmet>    
        <Grid container justifyContent="space-around" alignContent="center" spacing={3}>
          {tabletopGames.map((tabletopGame) => 
            <Grid item justifyItems="center" sm={12} md={6} lg={3}>
              <ReviewCard pictureHeight={300} {...tabletopGame}/>
            </Grid>
          )}         
        </Grid>   
      </>
            
    )
};