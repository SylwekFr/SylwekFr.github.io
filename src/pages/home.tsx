import Grid from '@mui/material/Grid';
import {categories} from '../data/categories';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

export default function Home() {
    
    return(        
      <Grid container justifyContent="space-around" alignContent="center" spacing={3}>
        {categories.map((category) => 
          <Grid item justifyItems="center" sm={12} md={6} lg={3}>
            <Card sx={{maxWidth: 345, m: "auto"}}>
              <CardMedia
                component="img"
                height="240"
                image={category.picture}
                alt={category.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {category.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {category.sumup}
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={category.path}>
                  <Button size="small">Learn More</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        )}         
      </Grid>         
    )
};