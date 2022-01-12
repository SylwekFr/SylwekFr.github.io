import Grid from '@mui/material/Grid';
import {books} from '../data/books';
import React from 'react';
import ReviewCard from '../components/review-card';
import { Helmet } from 'react-helmet';

export default function Books() {

    return(
      <>
        <Helmet>
          <title>SylwekFr - Books</title>
          <meta name="description" content="Some books I encourage to read or that I liked"/>
        </Helmet>
        <Grid container justifyContent="space-around" alignContent="center" spacing={3}>
          {books.map((book) => 
            <Grid item justifyItems="center" sm={12} md={6} lg={3}>
              <ReviewCard {...book} pictureHeight={500}/>
            </Grid>
          )}         
        </Grid> 
      </>        
              
    )
};