import * as React from 'react';
import ListItemText from '@mui/material/ListItemText';
import { SkillContainr } from '../types';
import SkillItem from './skill-item';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';

const SkillContainer = (props: SkillContainr) => {
    const {data, icon, name} = props;
    const [open, setOpen] = React.useState(false);

    const onExpand = () => {
        setOpen(!open);
    };

    return(
        <>
            <ListItemButton onClick={onExpand}>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={name} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {data.map((item) =>
                        <SkillItem {...item}/>
                    )}
                </List>    
            </Collapse>
        </>
    );
};

export default SkillContainer;