import { AppBar, Toolbar, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';
import { useContext } from 'react';
import { ColorModeContext } from '../App';

interface HeaderProps {
    title: string;
}

export default function Header(props: HeaderProps){
    const { title } = props;
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const onChangeMode = () => {
        setAnchorEl(null);
        colorMode.toggleColorMode();
    }

    return(
        <>
            <AppBar position="sticky" sx={{mb: 3}}>
                <Toolbar>
                    <Typography
                      component="h1"
                      variant="h4"
                      color="inherit"
                      align="center"
                      noWrap
                      sx={{ flex: 1 }}>
                          {title}
                      </Typography>
                    <div>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                            >
                            <SettingsIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            >
                            <MenuItem onClick={onChangeMode}>
                                <ListItemIcon>
                                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                                </ListItemIcon>
                                <ListItemText>{theme.palette.mode} mode</ListItemText>
                            </MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}