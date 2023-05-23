import Grid from '@mui/material/Grid';
import React from 'react';
import ReviewCard from '../../shared/components/review-card';
import Book from '../entities/book';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

export default function Books(): JSX.Element {
  const { t } = useTranslation('books');
  return (
    <>
      <Helmet>
        <title>SylwekFr - Books</title>
        <meta
          name="description"
          content="Welcome to the book's part. This part contains books I recommend reading. If you read those books, I hope you will enjoy them as much as I did. Wishing you some lovely reading time."
        />
      </Helmet>
      <Grid
        container
        justifyContent="space-around"
        alignContent="center"
        spacing={3}
      >
        {t<string, Book[]>('books', { returnObjects: true }).map(
          (book) => (
            <Grid key={book.title} item justifyItems="center" sm={12} md={6} lg={3}>
              <ReviewCard {...book} pictureHeight={500} />
            </Grid>
          ),
        )}
      </Grid>
    </>
  );
}
