import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import React from 'react';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Tooltip from '@mui/material/Tooltip';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }
  
const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
}));

type ReviewCardProps = {
    avatar?: string;
    author: string;
    date: number;
    detail: string;
    picture: string;
    pictureHeight: number;
    sumup: string;
    title: string;
}

const ReviewCard = (props: ReviewCardProps) => {
    const [expanded, setExpanded] = React.useState(false);

    const onExpand = () => {
        setExpanded(!expanded);
    };

    const {author, avatar, date, detail, picture, pictureHeight, sumup, title} = props
    return(      
        <>  
            <Card sx={{maxWidth: 345, m: "auto"}}>
                <CardHeader
                    avatar={
                        <Tooltip title={author}>
                            <Avatar aria-label="author" alt={author} src={avatar}/>
                        </Tooltip>  
                    }
                    title={title}
                    subheader={date}
                />
              <CardMedia
                component="img"
                height={pictureHeight}
                image={picture}
                alt={title}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {sumup}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                    <ExpandMore
                    expand={expanded}
                    onClick={onExpand}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography paragraph>
                        {detail}
                    </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </>     
    )
};

export default ReviewCard;