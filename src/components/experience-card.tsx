import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import React, { FC } from 'react';
import { Experience } from '../types';

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

const ExperienceCard: FC<Experience> = (props: Experience) => {
  const [expanded, setExpanded] = React.useState(false);

  const onExpand = () => {
    setExpanded(!expanded);
  };

  const { company, companyLogo, context, position, tasks, tags, timeRanges } =
    props;
  return (
    <>
      <Card sx={{ maxWidth: 345, m: 'auto' }}>
        <CardHeader
          avatar={
            <Tooltip title={company}>
              <Avatar aria-label="author" alt={company} src={companyLogo} />
            </Tooltip>
          }
          title={position}
          subheader={timeRanges}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {context}
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
              <ul>
                {tasks.map((task) => (
                  <li>{task}</li>
                ))}
              </ul>
            </Typography>
          </CardContent>
        </Collapse>
        <CardContent>
          {tags.map((tag) => (
            <Chip label={tag} size="small" />
          ))}
        </CardContent>
      </Card>
    </>
  );
};

export default ExperienceCard;
