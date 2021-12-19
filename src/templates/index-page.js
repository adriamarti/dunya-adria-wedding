import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { Box, Container, Typography, Grid, Stack } from "@mui/material";

import Layout from "../components/Layout";
import Data from "../components/Data";
import Confirmation from "../components/Confirmation";
import LogoBG from "../img/logo-bg.svg";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  heading,
  paragraph,
  when,
  where,
  confirmButton,
  note,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#000000",
        backgroundImage: `url(${LogoBG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: { xs: 0, md: "100%", lg: "80%", xl: "70%" },
      }}
    >
      <Box
        sx={{
          zIndex: "0",
          display: { xs: "none", md: "block" },
          position: "absolute",
          width: { md: "80%", lg: "60%" },
          bottom: "0",
          right: { md: "-10%", lg: "0" },
          borderRadius: { xs: "200px", md: "0" },
          overflow: "hidden",
        }}
      >
        <StaticImage
          src="../img/dunya-adria.png"
          alt={heading}
          placeholder="none"
        />
      </Box>

      <Container
        maxWidth="lg"
        sx={{
          paddingTop: { xs: "40px", md: "120px" },
          paddingBottom: "40px",
          zIndex: "1",
        }}
      >
        <Grid container>
          <Grid item xs={12} md={6}>
            <Stack
              direction="column"
              spacing={6}
              alignItems={{ xs: "center", sm: "center", md: "flex-start" }}
            >
              <Box
                sx={{
                  display: { xs: "block", md: "none" },
                  width: "120px",
                  height: "120px",
                  textAlign: "center",
                  border: "1px solid #ffffff",
                  borderRadius: "60px",
                  paddingTop: "34px",
                }}
              >
                <StaticImage
                  src="../img/icon-white.svg"
                  alt="D&A"
                  placeholder="none"
                />
              </Box>
              <Box sx={{ width: { xs: "80%", md: "100%" } }}>
                <StaticImage
                  src="../img/nos-casamos.png"
                  alt={heading}
                  placeholder="none"
                />
              </Box>
              <Typography variant="body1" sx={{ color: "#ffffff" }}>
                {paragraph}
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row", md: "column" }}
                spacing={{ xs: 2, sm: 5, md: 2 }}
              >
                <Data label={when.label} value={when.value} color="#ffffff" />
                <Data label={where.label} value={where.value} color="#ffffff" />
              </Stack>
              <Box textAlign="center" width="100%">
                <Confirmation button={confirmButton} />
              </Box>
              <Typography variant="caption" sx={{ color: "#ffffff" }}>
                {note}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

IndexPageTemplate.propTypes = {
  heading: PropTypes.string,
  paragraph: PropTypes.string,
  when: PropTypes.object,
  where: PropTypes.object,
  confirmButton: PropTypes.string,
  note: PropTypes.string,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        heading={frontmatter.heading}
        paragraph={frontmatter.paragraph}
        when={frontmatter.when}
        where={frontmatter.where}
        confirmButton={frontmatter.confirmButton}
        note={frontmatter.note}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        heading
        paragraph
        when {
          label
          value
        }
        where {
          label
          value
        }
        confirmButton
        note
        title
      }
    }
  }
`;
