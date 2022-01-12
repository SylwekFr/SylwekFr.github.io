import React from 'react';
import  CssBaseline from '@mui/material/CssBaseline';
import Header from './components/header';
import Home from './pages/home';
import Books from './pages/books';
import TabletopGames from './pages/tabletop-game';
import AboutMe from './pages/about-me';
import NotFound from './pages/not-found';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

enum routes {
  home = "/",
  book = "/books",
  tabletopGame = "/tabletop-game",
  aboutMe = "/about-me"
}



function App(): JSX.Element {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> 
          <Header title="Just a curious guy"/>
          <BrowserRouter>
            <Switch>
              <Route path={routes.home} exact component={Home} />
              <Route path={routes.book} exact component={Books} />
              <Route path={routes.tabletopGame} exact component={TabletopGames} />
              <Route path={routes.aboutMe} exact component={AboutMe} />
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>        
      </ThemeProvider>
    </ColorModeContext.Provider>
    
  );
}

export default App;
