import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import ReviewCard from '../../shared/components/review-card';
import Book from '../entities/book';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { BookApiRepository } from '../repositories/boook-api-repository';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Books(): JSX.Element {
  const { t } = useTranslation('books');
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const isbnArray = t<string, string[]>('books', { returnObjects: true });
    const BookGetter = new BookApiRepository;
    Promise.all(isbnArray.map((isbn) => BookGetter.getBook(isbn)))
      .then((bookDataArray) => {
        setBooks(bookDataArray);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [t]);


  return (
    <>
      <Helmet>
        <title>SylwekFr - Books</title>
        <meta
          name="description"
          content="Welcome to the book's part. This part contains books I recommend reading. If you read those books, I hope you will enjoy them as much as I did. Wishing you some lovely reading time."
        />
      </Helmet>
      { loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <CircularProgress />
        </Box>
      ) : (
        <Grid
          container
          justifyContent="space-around"
          alignContent="center"
          spacing={3}
        >
        {books.map((book) => (
              <Grid key={book.title} item justifyItems="center" sm={12} md={6} lg={3}>
                <ReviewCard {...book} pictureHeight={500} />
              </Grid>
              )
            )
        }
      </Grid>
      )}
    </>
  );
}
