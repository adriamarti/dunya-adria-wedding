import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import ReactMarkdown from 'markdown-to-jsx';

import '../../components/all.sass';

const InfoPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <>
        <Helmet>
          <link
            href='https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap'
            rel='stylesheet'
          ></link>

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
        <div className='content'>
          <h1 className='abril'>{data.title}</h1>
          <h2 className='roboto'>{data.description}</h2>
        </div>
        <div className='image'>
          <img src={`${data.coverImage}`} alt='' height='auto' width='100%' />
        </div>
        <div className='content info__content'>
          <ReactMarkdown className='roboto'>{data.content}</ReactMarkdown>
        </div>
      </>
    );
  } else {
    return <div>Loading...</div>;
  }
};

InfoPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default InfoPagePreview;
