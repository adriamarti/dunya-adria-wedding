import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import ReactMarkdown from 'markdown-to-jsx';

import '../../components/all.sass';

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const IndexPagePreview = ({ entry }) => {
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
        <div className='cover'>
          <h1 className='abril'>{data.heading}</h1>
          <p className='roboto'>{data.paragraph}</p>
          <div className='data'>
            <span className='roboto data__label'>{data.when.name}</span>
            <span className='roboto data__value'>{data.when.value}</span>
          </div>
          <div className='data'>
            <span className='roboto data__label'>{data.where.name}</span>
            <span className='roboto data__value'>{data.where.value}</span>
          </div>
          <button className='roboto'>{data.confirmButton}</button>
          <div className='info'>
            <ArrowDownwardIcon sx={{ color: '#ffffff' }} />
            <span className='roboto'>{data.note}</span>
          </div>
        </div>
        <div className='section'>
          <h4 className='roboto'>{data.ceremonyPre}</h4>
          <h2 className='abril'>{data.ceremonyTitle}</h2>
          <ReactMarkdown className='roboto'>{data.ceremonyText}</ReactMarkdown>
        </div>
        <div className='section'>
          <h4 className='roboto'>{data.celebrationPre}</h4>
          <h2 className='abril'>{data.celebrationTitle}</h2>
          <ReactMarkdown className='roboto'>
            {data.celebrationText}
          </ReactMarkdown>
        </div>
        <div className='section'>
          <h2 className='abril'>{data.infoTitle}</h2>
          <div className='info__posts'>
            {data.infoPosts.map(({ image, title, text }) => (
              <div className='info__post__wrapper'>
                <img src={`${image}`} alt='' height='50px' width='50px' />
                <div className='info__post'>
                  <h5 className='abril'>{title}</h5>
                  <div className='roboto'>{text}</div>
                </div>
              </div>
            ))}
          </div>
          <div className='details__wrapper'>
            {data.details.map(({ emoticon, title, text }) => (
              <div className='details'>
                <div class='emoticon'>{emoticon}</div>
                <div className='details__text'>
                  <h5 className='roboto'>{title}</h5>
                  <p className='roboto'>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  } else {
    return <div>Loading...</div>;
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default IndexPagePreview;
