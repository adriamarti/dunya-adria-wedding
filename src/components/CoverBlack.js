import * as React from 'react';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';

import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import Markdown from './Markdown';
import Confirmation from './Confirmation';
import Data from './Data';
import Logo from '../img/logo-bg.svg';
import DyA from '../img/dunya-adria.png';

const Cover = ({ title, intro, when, where, confirmButton, note }) => (
  <Box
    sx={{
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#000000',
      backgroundImage: `url(${Logo})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: { xs: 0, md: '100%', lg: '80%', xl: '70%' },
    }}
  >
    <Box
      sx={{
        zIndex: '0',
        display: { xs: 'none', md: 'block' },
        position: 'absolute',
        width: { md: '80%', lg: '60%' },
        bottom: '0',
        right: { md: '-10%', lg: '0' },
        borderRadius: { xs: '200px', md: '0' },
        overflow: 'hidden',
      }}
    >
      <StaticImage
        src='../img/dunya-adria.png'
        alt={title}
        placeholder='none'
      />
    </Box>

    <Container
      maxWidth='lg'
      sx={{
        paddingTop: { xs: '80px', md: '160px' },
        paddingBottom: '40px',
        zIndex: '1',
        backgroundImage: { xs: `url(${DyA})`, md: 'none' },
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: 'bottom',
        minHeight: '100vh',
      }}
    >
      <Grid container>
        <Grid item xs={12} md={6}>
          <Stack
            direction='column'
            spacing={6}
            alignItems={{
              xs: 'center',
              sm: 'center',
              md: 'flex-start',
            }}
          >
            <Box
              sx={{
                display: { xs: 'block', md: 'none' },
                width: '70px',
                height: '70px',
                textAlign: 'center',
                borderRadius: '50px',
              }}
            >
              <StaticImage
                src='../img/icon-white.svg'
                alt='D&A'
                placeholder='none'
                style={{ marginTop: '25px', width: '50px', height: '50px' }}
              />
            </Box>
            <Box sx={{ width: { xs: '80%', md: '100%' } }}>
              <StaticImage
                src='../img/nos-casamos.png'
                alt={title}
                placeholder='none'
              />
            </Box>
            {/* <Typography
              variant='body1'
              sx={{
                color: '#ffffff',
                textAlign: { xs: 'center', md: 'left' },
                marginTop: { xs: '32px !important', md: '48px' },
              }}
            >
              {intro}x
            </Typography> */}
            <Markdown
              sx={{
                fontSize: '16px',
                lineHeight: '24px',
                fontFamily: "'Roboto', sans-serif",
                color: '#ffffff',
                textAlign: { xs: 'center', md: 'left' },
                marginTop: { xs: '32px !important', md: '48px' },
              }}
            >
              {intro}
            </Markdown>
            <Stack
              direction={{ xs: 'column', sm: 'row', md: 'column' }}
              spacing={{ xs: 2, sm: 5, md: 2 }}
              sx={{
                marginTop: { xs: '32px !important', md: '48px' },
              }}
            >
              <Data label={when.name} value={when.value} color='#ffffff' />
              <Data label={where.name} value={where.value} color='#ffffff' />
            </Stack>
            <Box
              textAlign='center'
              width='100%'
              sx={{
                position: { xs: 'absolute', md: 'relative' },
                bottom: { xs: '20px', md: '-20px' },
              }}
            >
              <Confirmation button={confirmButton} />
            </Box>
            <Stack
              spacing={2}
              direction='row'
              sx={{
                position: 'absolute',
                bottom: { xs: '20px', md: '20px' },
                left: { xs: '20px' },
              }}
            >
              <ArrowDownwardIcon sx={{ color: '#ffffff' }} />
              <Typography
                variant='body1'
                sx={{
                  color: '#ffffff',
                  transform: {
                    xs: 'translate(-90px, -80px) rotate(270deg)',
                    md: 'translate(0,0) rotate(0deg)',
                  },
                }}
              >
                {note}
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

Cover.propTypes = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  when: PropTypes.object.isRequired,
  where: PropTypes.object.isRequired,
  confirmButton: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
};

export default Cover;
