import Grid from '@mui/material/Grid';
import React from 'react';
import ReviewCard from '../../shared/components/review-card';
import { Helmet } from 'react-helmet';
import TabletopGame from '../entities/tabletopGame';
import { useTranslation } from 'react-i18next';

export default function TabletopGames(): JSX.Element {
  const { t } = useTranslation('tabletop-games');
  return (
    <>
      <Helmet>
        <title>SylwekFr - Tabletop Games</title>
        <meta
          name="description"
          content="Some tabletop games I enjoy to play with friend and I recommend to have a fun time"
        />
      </Helmet>
      <Grid
        container
        justifyContent="space-around"
        alignContent="center"
        spacing={3}
      >
        {t<string, TabletopGame[]>('tabletopGames', {
          returnObjects: true,
        }).map((tabletopGame) => (
          <Grid item justifyItems="center" sm={12} md={6} lg={3}>
            <ReviewCard pictureHeight={300} {...tabletopGame} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
