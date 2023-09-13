import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import ReviewCard from '../../shared/components/review-card';
import Book from '../entities/book';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { BookApiRepository } from '../repositories/boook-api-repository';

export default function Books(): JSX.Element {
  const { t } = useTranslation('books');
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const isbnArray = t<string, string[]>('books', { returnObjects: true });
    const BookGetter = new BookApiRepository;
    Promise.all(isbnArray.map((isbn) => BookGetter.getBook(isbn)))
      .then((bookDataArray) => {
        setBooks(bookDataArray);
      })
      .catch((error) => {
        console.error(error);
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
    </>
  );
}
