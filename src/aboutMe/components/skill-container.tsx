import { ExpandLess, ExpandMore } from '@mui/icons-material';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { FC, useState } from 'react';
import { SkillContainer as SkillContainr } from '../entities/skill';
import SkillItem from './skill-item';

const SkillContainer: FC<SkillContainr> = (props: SkillContainr) => {
  const { data, icon, name } = props;
  const [open, setOpen] = useState(false);

  const onExpand = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={onExpand}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {data.map((item) => (
            <SkillItem {...item} />
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default SkillContainer;
