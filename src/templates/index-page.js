import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import CoverBlack from '../components/CoverBlack';
import Ceremony from '../components/Ceremony';
import Celebration from '../components/Celebration';
import Information from '../components/Information';

// eslint-disable-next-line
export const IndexPageTemplate = ({
  cover,
  ceremony,
  celebration,
  information,
}) => {
  return (
    <>
      <CoverBlack {...cover} />
      <Ceremony {...ceremony} />
      <Celebration {...celebration} />
      <Information {...information} />
    </>
  );
};

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string,
  when: PropTypes.object,
  where: PropTypes.object,
  confirmButton: PropTypes.string,
  note: PropTypes.string,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const cover = {
    title: frontmatter.title,
    intro: frontmatter.intro,
    when: frontmatter.when,
    where: frontmatter.where,
    confirmButton: frontmatter.confirmButton,
    note: frontmatter.note,
  };
  const ceremony = {
    ceremonyPre: frontmatter.ceremonyPre,
    ceremonyTitle: frontmatter.ceremonyTitle,
    ceremonyText: frontmatter.ceremonyText,
  };
  const celebration = {
    celebrationPre: frontmatter.celebrationPre,
    celebrationTitle: frontmatter.celebrationTitle,
    celebrationText: frontmatter.celebrationText,
  };
  const information = {
    title: frontmatter.infoTitle,
    infoPosts: frontmatter.infoPosts,
    details: frontmatter.details,
  };

  return (
    <Layout>
      <IndexPageTemplate
        cover={cover}
        ceremony={ceremony}
        celebration={celebration}
        information={information}
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
        title
        intro
        when {
          name
          value
        }
        where {
          name
          value
        }
        confirmButton
        note
        ceremonyPre
        ceremonyTitle
        ceremonyText
        celebrationPre
        celebrationTitle
        celebrationText
        infoTitle
        infoPosts {
          link
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
          title
          text
        }
        details {
          emoticon
          title
          text
        }
      }
    }
  }
`;
