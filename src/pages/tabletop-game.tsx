import Grid from '@mui/material/Grid';
import {tabletopGames} from '../data/tabletop-game';
import React from 'react';
import ReviewCard from '../components/review-card';

export default function TabletopGames() {

    return(        
      <Grid container justifyContent="space-around" alignContent="center" spacing={3}>
        {tabletopGames.map((tabletopGame) => 
          <Grid item justifyItems="center" sm={12} md={6} lg={3}>
            <ReviewCard pictureHeight={300} {...tabletopGame}/>
          </Grid>
        )}         
      </Grid>         
    )
};