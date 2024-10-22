import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import React, { FC } from 'react';

type ExpandMoreProps = {
  expand: boolean;
} & IconButtonProps;

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

export type ReviewCardProps = {
  avatar?: string;
  author: string;
  date: number;
  detail?: string;
  picture: string;
  pictureHeight: number;
  sumup: string;
  title: string;
};

const ReviewCard: FC<ReviewCardProps> = (props: ReviewCardProps) => {
  const [expanded, setExpanded] = React.useState(false);

  const onExpand = () => {
    setExpanded(!expanded);
  };

  const { author, avatar, date, detail, picture, pictureHeight, sumup, title } =
    props;
  return (
    <Card sx={{ maxWidth: 345, m: 'auto' }}>
      <CardHeader
        avatar={
          <Tooltip title={author}>
            <Avatar aria-label="author" alt={author} src={avatar} />
          </Tooltip>
        }
        title={title}
        subheader={date}
      />
      <CardMedia
        component="img"
        loading="lazy"
        height={pictureHeight}
        image={picture}
        alt={title}
      />
      { detail && (
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {detail}
        </Typography>
      </CardContent>
      )}
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
          <Typography paragraph>{sumup}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ReviewCard;
