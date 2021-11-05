import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

interface HeaderProps {
    title: string;
}

export default function Header(props: HeaderProps){
    const { title } = props;
    return(
        <>
            <AppBar position="sticky" sx={{mb: 3}}>
                <Toolbar>
                    <Typography
                      component="h2"
                      variant="h5"
                      color="inherit"
                      align="center"
                      noWrap
                      sx={{ flex: 1 }}>
                          {title}
                      </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}