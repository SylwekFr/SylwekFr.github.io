import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

type categoryIndex = {
  name: string;
  sumup: string;
  picture: string;
  path: string;
};

export default function Home(): JSX.Element {
  const { t } = useTranslation('home');
  const localCategories = t<string, categoryIndex[]>('categories', {
    returnObjects: true,
  });
  return (
    <Grid
      container
      justifyContent="space-around"
      alignContent="center"
      spacing={3}
    >
      {localCategories.map(({ name, sumup, picture, path }) => (
        <Grid key="name" item justifyItems="center" sm={12} md={6} lg={3}>
          <Card sx={{ maxWidth: 345, m: 'auto' }}>
            <CardMedia
              component="img"
              height="240"
              image={picture}
              loading="lazy"
              alt={name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {sumup}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={path}>
                <Button size="small">{t<string>('more')}</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
