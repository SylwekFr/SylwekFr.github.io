import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/header';
import Home from './pages/home';
import Books from './pages/books';
import TabletopGames from './pages/tabletop-game';
import AboutMe from './pages/about-me';
import NotFound from './pages/not-found';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const ColorModeContext = React.createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleColorMode: () => {},
});

enum routes {
  home = '/',
  book = '/books',
  tabletopGame = '/tabletop-game',
  aboutMe = '/about-me',
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
  const { t } = useTranslation('home');
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header title={t<string>('title')} />
        <BrowserRouter>
          <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.book} element={<Books />} />
            <Route path={routes.tabletopGame} element={<TabletopGames />} />
            <Route path={routes.aboutMe} element={<AboutMe />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
