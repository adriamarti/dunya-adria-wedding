import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Box, Container, Typography, Grid } from '@mui/material';

import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Markdown from '../components/Markdown';

// eslint-disable-next-line
export const InfoPageTemplate = ({ title, description, image, content }) => {
  return (
    <Box sx={{ backgroundColor: '#ffffff' }}>
      <Container
        maxWidth='lg'
        sx={{
          marginTop: '140px',
          backgroundColor: '#ffffff',
        }}
      >
        <Grid container spacing={6} justifyContent='center'>
          <Grid item xs={12} md={10}>
            <Heading
              variant='h2'
              component='h1'
              sx={{
                backgroundColor: '#ffffff',
              }}
            >
              {title}
            </Heading>
          </Grid>
          <Grid item xs={12} md={10}>
            <Typography variant='h4' component='h2'>
              {description}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <img
              src={`../..${image.childImageSharp.gatsbyImageData.images.fallback.src}`}
              alt={title}
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </Grid>
          <Grid item xs={12} md={10}>
            <Markdown>{content}</Markdown>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

InfoPageTemplate.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string,
  when: PropTypes.object,
  where: PropTypes.object,
  confirmButton: PropTypes.string,
  note: PropTypes.string,
};

const InfoPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <InfoPageTemplate
        title={frontmatter.title}
        description={frontmatter.description}
        image={frontmatter.coverImage}
        content={frontmatter.content}
      />
    </Layout>
  );
};

InfoPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default InfoPage;

export const pageQuery = graphql`
  query InfoPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        coverImage {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        content
      }
    }
  }
`;
