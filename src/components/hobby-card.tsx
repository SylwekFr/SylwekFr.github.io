import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { Hobby } from '../types';

const HobbyCard: FC<Hobby> = (props: Hobby) => {
  const { abbreviation, federationLogo, name, picture, sumUp } = props;
  return (
    <>
      <Card sx={{ maxWidth: 345, m: 'auto' }}>
        <CardHeader
          avatar={
            <Avatar aria-label="name" src={federationLogo}>
              {abbreviation}
            </Avatar>
          }
          title={name}
        />
        <CardMedia
          component="img"
          height="200"
          image={picture}
          loading="lazy"
          alt={name}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {sumUp}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default HobbyCard;
