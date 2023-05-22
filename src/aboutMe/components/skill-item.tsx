import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { FC } from 'react';
import { Skill } from '../../types';

const SkillItem: FC<Skill> = (props: Skill) => {
  const { abbreviation, level, logo, name } = props;
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar aria-label="author" alt={name} src={logo}>
          {abbreviation}
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} secondary={level} />
    </ListItem>
  );
};

export default SkillItem;
