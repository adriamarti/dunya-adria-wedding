import * as React from 'react';
import PropTypes from 'prop-types';

import { Box, Container, Grid, Link, Stack, Divider } from '@mui/material';

import Heading from './Heading';
import Paragraph from './Paragraph';

const Information = ({ title, details, infoPosts }) => (
  <Container
    id='info'
    maxWidth='lg'
    sx={{
      marginTop: '280px',
      maxHeight: {
        xs: '1000px',
        sm: '500px',
        md: '100px',
      },
    }}
  >
    <Grid
      container
      sx={{ transform: 'translateY(-800px)' }}
      rowSpacing={4}
      columnSpacing={8}
      alignItems='center'
    >
      <Grid item xs={12}>
        <Heading variant='h3' component='h2' sx={{ marginBottom: '40px' }}>
          {title}
        </Heading>
      </Grid>

      <Grid item xs={12} md={6}>
        {infoPosts.map(({ link, image, title, text }, index) => (
          <Box key={link}>
            <Link
              href={link}
              underline='hover'
              sx={{ cursor: 'pointer', '&:hover': { color: '#e27c6e' } }}
            >
              <Stack direction='row' spacing={2}>
                <Box
                  sx={{
                    width: '80px',
                    height: '80px',
                  }}
                >
                  <img
                    src={`../..${image.childImageSharp.gatsbyImageData.images.fallback.src}`}
                    width='80px'
                    height='80px'
                    alt=''
                    style={{
                      width: '80px',
                      height: '80px',
                    }}
                  />
                </Box>
                <Stack spacing={1}>
                  <Heading variant='h6' component='h3'>
                    {title}
                  </Heading>
                  <Paragraph>{text}</Paragraph>
                </Stack>
              </Stack>
            </Link>
            {index + 1 !== infoPosts.length && (
              <Divider sx={{ margin: '20px 0' }} />
            )}
          </Box>
        ))}
      </Grid>
      <Grid item xs={12} md={6} sx={{ marginTop: '20px' }}>
        <Box
          sx={{
            backgroundColor: 'rgba(245, 245, 245)',
            padding: '40px',
          }}
        >
          {details.map(({ emoticon, title, text }) => (
            <Stack
              key={title}
              direction='row'
              spacing={2}
              alignItems='flex-start'
              sx={{ marginBottom: '20px' }}
            >
              <Heading variant='h5' component='span'>
                {emoticon}
              </Heading>
              <Stack spacing={0}>
                <Paragraph variant='h6' component='h3'>
                  {title}
                </Paragraph>
                <Paragraph>{text}</Paragraph>
              </Stack>
            </Stack>
          ))}
        </Box>
      </Grid>
    </Grid>
  </Container>
);

Information.propTypes = {
  title: PropTypes.string.isRequired,
  details: PropTypes.array.isRequired,
};

export default Information;
