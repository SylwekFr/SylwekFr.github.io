import Grid from '@mui/material/Grid';
import {books} from '../data/books';
import React from 'react';
import ReviewCard from '../components/review-card';

export default function Books() {

    return(        
      <Grid container justifyContent="space-around" alignContent="center" spacing={3}>
        {books.map((book) => 
          <Grid item justifyItems="center" sm={12} md={6} lg={3}>
            <ReviewCard {...book} pictureHeight={500}/>
          </Grid>
        )}         
      </Grid>         
    )
};