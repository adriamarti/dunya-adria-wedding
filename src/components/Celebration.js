import * as React from 'react';
import PropTypes from 'prop-types';

import { Box, Container, Grid } from '@mui/material';

import SanHipolitoVideoMp4 from '../videos/san-hipolito.mp4';
import SanHipolitoVideoOgv from '../videos/san-hipolito.ogv';
import SanHipolitoVideoWebm from '../videos/san-hipolito.webm';
import Heading from './Heading';
import Paragraph from './Paragraph';
import Markdown from './Markdown';

const Celebration = ({ celebrationPre, celebrationTitle, celebrationText }) => (
  <Container
    id='celebracion'
    maxWidth='lg'
    sx={{
      marginTop: {
        xs: '-100px',
        md: '180px',
        lg: '240px',
      },
    }}
  >
    <Box
      sx={{
        width: '100%',
        hidden: 'auto',
        overflow: 'hidden',
      }}
    >
      <video
        autoPlay
        muted
        loop
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
        poster='../img/video-poster.png'
      >
        <source src={SanHipolitoVideoWebm} type='video/webm' />
        <source src={SanHipolitoVideoOgv} type='video/ogg' />
        <source src={SanHipolitoVideoMp4} type='video/mp4' />
      </video>
    </Box>
    <Box
      sx={{
        width: {
          xs: '160px',
          md: '260px',
        },
        height: {
          xs: '700px',
          sm: '700px',
        },
        backgroundColor: 'rgba(245, 245, 245)',
        margin: '0 auto',
        transform: {
          xs: 'translateY(-70px)',
          md: 'translateY(-140px)',
        },
      }}
    ></Box>
    <Grid
      container
      justifyContent='center'
      sx={{
        transform: {
          xs: 'translateY(-650px)',
          md: 'translateY(-700px)',
          lg: 'translateY(-800px)',
        },
      }}
    >
      <Grid item xs={12} md={6}>
        <Paragraph
          variant='h6'
          component='h3'
          sx={{
            color: '#e27c6e',
            marginBottom: '20px',
            marginTop: { xs: '0', md: '60px', lg: '140px' },
            textAlign: 'center',
          }}
        >
          {celebrationPre}
        </Paragraph>
        <Heading
          variant='h3'
          component='h2'
          sx={{ marginBottom: '40px', textAlign: 'center' }}
        >
          {celebrationTitle}
        </Heading>
        {/* <Paragraph sx={{ marginBottom: '20px', textAlign: 'center' }}>
          Llegando a las 18:30 al{' '}
          <Link
            href='https://goo.gl/maps/Fwj8gHmez5zwA4oy5'
            target='_blank'
            rel='noreferrer'
            underline='hover'
            sx={{ color: '#e27c6e' }}
          >
            Ex-Convento de San Hipólito
          </Link>
          , comenzaremos a calentar motores, con un cocktail de bienvenida, para
          romper el hielo y que nos conozcamos todos.{' '}
          <strong>¡A disfrutar!</strong>
        </Paragraph>

        <Paragraph sx={{ marginBottom: '20px', textAlign: 'center' }}>
          Mientras están gozando de los cocteles y aperitivos, nosotros
          estaremos en un petit comité, celebrando nuestra boda civil. ¡En un
          momento más bajamos a unirnos con ustedes!
        </Paragraph>
        <Paragraph sx={{ marginBottom: '20px', textAlign: 'center' }}>
          ¡Ahora sí, casados y felices, comienza la fiesta! De{' '}
          <strong>19:30 hasta las 4:00 de la mañana</strong>, bailando mucho y
          compartiendo momentos inolvidables en nuestro día.
        </Paragraph> */}
        <Markdown
          sx={{
            textAlign: 'center',
          }}
        >
          {celebrationText}
        </Markdown>
      </Grid>
    </Grid>
  </Container>
);

Celebration.propTypes = {
  celebrationPre: PropTypes.string.isRequired,
  celebrationTitle: PropTypes.string.isRequired,
  celebrationText: PropTypes.string.isRequired,
};

export default Celebration;
