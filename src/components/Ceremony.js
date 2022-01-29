import * as React from 'react';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';

import { Box, Container, Grid } from '@mui/material';

import Heading from './Heading';
import Paragraph from './Paragraph';
import ImageWrapper from './ImageWrapper';
import Markdown from './Markdown';

const Ceremony = ({ ceremonyPre, ceremonyTitle, ceremonyText }) => (
  <>
    <ImageWrapper
      sx={{
        marginTop: '80px',
        width: '100%',
        height: 'auto',
        overflow: 'hidden',
        display: { xs: 'block', md: 'none' },
      }}
    >
      <StaticImage
        src='../img/sagrada-familia.png'
        alt='Parróquia de la Sagrada Familia'
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
    </ImageWrapper>
    <Container
      id='ceremonia'
      maxWidth='lg'
      sx={{
        marginTop: { xs: '0', md: '200px' },
        transform: { xs: 'translateY(-200px)', md: 'translateY(0)' },
      }}
    >
      <Grid
        container
        spacing={8}
        sx={{ background: { xs: 'none', md: 'none' } }}
        justifyContent='center'
      >
        <Grid item xs={0} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
          <ImageWrapper sx={{ height: { xs: '200px', md: 'auto' } }}>
            <StaticImage
              src='../img/sagrada-familia.png'
              alt='Parróquia de la Sagrada Familia'
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </ImageWrapper>
        </Grid>
        <Grid item xs={10} md={6} sx={{ marginTop: { xs: '0', md: '100px' } }}>
          <Box
            sx={{
              padding: { xs: '20px', md: '0' },
              background: { xs: 'rgba(255, 255, 255, 0.7)', md: 'none' },
            }}
          >
            <Paragraph
              variant='h6'
              component='h3'
              sx={{
                color: '#e27c6e',
                marginBottom: '20px',
                marginTop: { xs: '0', md: '60px', lg: '140px' },
              }}
            >
              {ceremonyPre}
            </Paragraph>
            <Heading variant='h3' component='h2' sx={{ marginBottom: '40px' }}>
              {ceremonyTitle}
            </Heading>
            {/* <Paragraph sx={{ marginBottom: '20px' }}>
              La ceremonia religiosa tendrá lugar en la{' '}
              <Link
                href='https://goo.gl/maps/Fwj8gHmez5zwA4oy5'
                target='_blank'
                rel='noreferrer'
                underline='hover'
                sx={{ margin: '0 5px 0 0', color: '#e27c6e' }}
              >
                Parroquia de la Sagrada Família
              </Link>
              , en punto de las 17 hrs.{' '}
              <strong>
                Se ruega máxima puntualidad, la misa comenzará sin esperar a
                nadie, y no nos gustaría que se perdieran de nada.
              </strong>
            </Paragraph>
            <Paragraph sx={{ marginBottom: '20px' }}>
              Una vez finalizada la ceremonia nos dirigiremos a la recepción, la
              cual se iniciará a las 18.30. Ofreceremos transporte hasta la
              repección para aquellos que lo hayan indicado en la confirmación
              de asistencia.
            </Paragraph> */}
            <Markdown>{ceremonyText}</Markdown>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </>
);

Ceremony.propTypes = {
  ceremonyPre: PropTypes.string.isRequired,
  ceremonyTitle: PropTypes.string.isRequired,
  ceremonyText: PropTypes.string.isRequired,
};

export default Ceremony;
