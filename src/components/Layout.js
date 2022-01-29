import * as React from 'react';
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby';

import { Box } from '@mui/material';

// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
import Menu from '../components/Menu';
import useSiteMetadata from './SiteMetadata';

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  const [alpha, setAlpha] = React.useState('1');

  const updateAlpha = () => {
    //@ TODO implement for mobile
    const decimal = parseInt((1000 - window.scrollY) / 100);
    setAlpha(decimal > 9 ? '1' : `0.${decimal}`);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', updateAlpha);
    updateAlpha();

    return () => window.removeEventListener('scroll', updateAlpha);
  }, []);

  return (
    <div>
      <Helmet>
        <html lang='en' />
        <title>{title}</title>
        <meta name='description' content={description} />

        <link
          href='https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap'
          rel='stylesheet'
        ></link>

        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel='icon'
          type='image/png'
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes='32x32'
        />
        <link
          rel='icon'
          type='image/png'
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes='16x16'
        />

        <link
          rel='mask-icon'
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color='#ff4400'
        />

        <meta name='theme-color' content='#fff' />

        <meta property='og:type' content='business.business' />
        <meta property='og:title' content={title} />
        <meta property='og:url' content='/' />
        <meta
          property='og:image'
          content={`${withPrefix('/')}img/og-image.jpg`}
        />

        <style type='text/css'>
          {`
            html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed,  figure, figcaption, footer, header, hgroup,  menu, nav, output, ruby, section, summary, time, mark, audio, video {  
              margin: 0;  
              padding: 0;  
              border: 0;  
              font-size: 100%;  
              font: inherit;  
              vertical-align: baseline; 
            }
          `}
        </style>
      </Helmet>
      <Menu />
      <Box sx={{ backgroundColor: `rgba(230, 230, 230, ${alpha})` }}>
        {children}
      </Box>
    </div>
  );
};

export default TemplateWrapper;
