import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Skill } from '../types';

const SkillItem = (props: Skill) => {
    const {abbreviation, level, logo, name} = props;
    return(
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