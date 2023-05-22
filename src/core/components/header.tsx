import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import SettingsIcon from '@mui/icons-material/Settings';
import { AppBar, Toolbar, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import NativeSelect from '@mui/material/NativeSelect';
import { useTheme } from '@mui/material/styles';
import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ColorModeContext } from '../../App';

type HeaderProps = {
  title: string;
};

export default function Header(props: HeaderProps): JSX.Element {
  const { title } = props;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const { t, i18n } = useTranslation('home');
  const [language, setLanguage] = useState(i18n.language);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onChangeMode = () => {
    setAnchorEl(null);
    colorMode.toggleColorMode();
  };

  const onChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
    setLanguage(event.target.value);
  };

  return (
    <>
      <AppBar position="sticky" sx={{ mb: 3 }}>
        <Toolbar>
          <Typography
            component="h1"
            variant="h4"
            color="inherit"
            align="center"
            noWrap
            sx={{ flex: 1 }}
          >
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
              <SettingsIcon />
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
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="language-selector">
                  {t<string>('langue')}
                </InputLabel>
                <NativeSelect
                  onChange={onChangeLanguage}
                  inputProps={{
                    name: 'language',
                    id: 'language-selector',
                  }}
                  value={language}
                >
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                </NativeSelect>
              </FormControl>
              <MenuItem onClick={onChangeMode}>
                <ListItemIcon>
                  {theme.palette.mode === 'dark' ? (
                    <Brightness7Icon />
                  ) : (
                    <Brightness4Icon />
                  )}
                </ListItemIcon>
                <ListItemText>{theme.palette.mode} mode</ListItemText>
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
