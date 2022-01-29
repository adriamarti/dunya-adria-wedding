import * as React from 'react';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';

import { Box, Container, Grid, Stack } from '@mui/material';

import Heading from './Heading';
import Paragraph from './Paragraph';
import Markdown from './Markdown';
import ImageWrapper from './ImageWrapper';
import Confirmation from './Confirmation';
import Data from './Data';
import Logo from '../img/logo.svg';

const Cover = ({
  heading,
  paragraph,
  when,
  where,
  confirmationButton,
  note,
}) => (
  <Box
    sx={{
      position: 'relative',
      width: '100%',
    }}
  >
    <Container
      maxWidth='lg'
      sx={{
        height: { xs: 'auto', md: '100vh' },
        overflow: 'hidden',
      }}
    >
      <Grid container spacing={0}>
        <Grid item xs={0} md={3}></Grid>
        <Grid item xs={12} md={6}>
          <Stack direction='column'>
            <Heading
              variant='h2'
              component='h1'
              sx={{
                margin: { xs: '30px 0', md: '60px 0 40px 0' },
                textAlign: 'center',
                textDecoration: 'underline solid #e27c6e 5px',
              }}
            >
              {heading}
            </Heading>
            <Markdown
              sx={{
                fontWeight: '500',
                textAlign: 'center',
                marginBottom: '20px',
                color: '#ffffff',
              }}
            >
              {paragraph}
            </Markdown>
            <ImageWrapper
              sx={{
                margin: '20px auto 0 auto',
                paddingTop: '40px',
                width: '80%',
                backgroundColor: '#000000',
                minHeight: '300px',
              }}
            >
              <Confirmation button={confirmationButton} />
              <StaticImage
                src='../img/cover-01a.jpg'
                alt='Adria y Dunyazath'
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </ImageWrapper>
          </Stack>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box
            sx={{ position: 'relative', height: { xs: 'auto', md: '100vh' } }}
          >
            <Stack
              direction='column'
              spacing={4}
              sx={{
                position: { xs: 'relative', md: 'absolute' },
                bottom: { xs: 'none', md: '100px' },
              }}
            >
              <Stack
                direction={{ xs: 'column', sm: 'row', md: 'column' }}
                spacing={{ xs: 1, sm: 4, md: 1 }}
                sx={{ marginTop: { xs: '40px', md: '0' } }}
                justifyContent='center'
              >
                <Data label={when.label} value={when.value} />
                <Data label={where.label} value={where.value} />
              </Stack>
              <Paragraph
                variant='body1'
                sx={{
                  marginTop: '40px',
                  fontWeight: '800',
                  borderLeft: { xs: 'none', md: '5px solid #e27c6e' },
                  padding: { xs: '10px', md: '0 0 0 10px' },
                  textAlign: { xs: 'center', md: 'left' },
                  color: { xs: '#e27c6e', md: '#3e554c' },
                }}
              >
                {note}
              </Paragraph>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container>
    <Box
      sx={{
        display: { xs: 'none', md: 'block' },
        position: 'absolute',
        width: '80%',
        minHeight: '300px',
        top: '40%',
        left: '10%',
        transform: 'rotate(-8deg)',
        backgroundImage: `url(${Logo})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: { xs: '90%' },
      }}
    ></Box>
  </Box>
);

Cover.defaultProps = {
  color: '#000000',
};

Cover.propTypes = {
  heading: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  when: PropTypes.object.isRequired,
  where: PropTypes.object.isRequired,
  confirmationButton: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
};

export default Cover;
