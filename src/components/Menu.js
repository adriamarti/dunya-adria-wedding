import * as React from 'react';
// import PropTypes from 'prop-types';

import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Stack,
  Container,
  Slide,
  Link,
  CssBaseline,
} from '@mui/material';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

const Menu = () => (
  <>
    <CssBaseline />
    <HideOnScroll>
      <AppBar sx={{ backgroundColor: '#e27c6e' }}>
        <Toolbar>
          <Container maxWidth='lg'>
            <Stack
              direction='row'
              spacing={4}
              justifyContent={{ xs: 'space-between', md: 'flex-start' }}
            >
              <Link
                href='/#ceremonia'
                underline='none'
                sx={{
                  color: '#ffffff',
                  fontFamily: 'Roboto, sans-serif',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                Ceremonia
              </Link>
              <Link
                href='/#celebracion'
                underline='none'
                sx={{
                  color: '#ffffff',
                  fontFamily: 'Roboto, sans-serif',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                Celebración
              </Link>
              <Link
                href='/#info'
                underline='none'
                sx={{
                  color: '#ffffff',
                  fontFamily: 'Roboto, sans-serif',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                Info
              </Link>
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  </>
);

// Menu.defaultProps = {
//   variant: 'h1',
//   component: null,
//   sx: {},
// };

// Menu.propTypes = {
//   variant: PropTypes.string,
//   component: PropTypes.string,
//   sx: PropTypes.object,
// };

export default Menu;
