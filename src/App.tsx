import CssBaseline from '@mui/material/CssBaseline';
import Header from './core/components/header';
import Home from './core/views/home';
import React, { lazy, Suspense } from 'react';
import {createHashRouter, RouterProvider} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Books = lazy(() => import('./books/view/books'));
const TabletopGames = lazy(() => import('./tabletopGame/view/tabletop-game'));
const AboutMe = lazy(() => import('./aboutMe/view/about-me'));
const NotFound = lazy(() => import('./core/views/not-found'));

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

const router = createHashRouter([
  {
    path: routes.home,
    element: <Home />,
  },
  {
    path: routes.book,
    element: <Books />,
  },
  {
    path: routes.tabletopGame,
    element: <TabletopGames />,
  },
  {
    path: routes.aboutMe,
    element: <AboutMe />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

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
            <Suspense fallback={<div>Loading...</div>}>
              <RouterProvider router={router} />
            </Suspense>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
