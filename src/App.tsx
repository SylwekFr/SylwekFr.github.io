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

const theme = createTheme();
enum routes {
  home = "/",
  book = "/books",
  tabletopGame = "/tabletop-game",
  aboutMe = "/about-me"
}
function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
        <Header title="The curious dude"/>
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
    
  );
}

export default App;
