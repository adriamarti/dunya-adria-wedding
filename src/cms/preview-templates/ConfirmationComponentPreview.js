import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import ReactMarkdown from 'markdown-to-jsx';

import '../../components/all.sass';

const ConfirmationComponentPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  console.log(data);

  const tabs = [
    `${data.tab} 1`,
    `${data.tab} 2`,
    `${data.tab} 3`,
    `${data.tab} 4`,
  ];

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
        <div className='confirmation roboto'>
          <h1 className='roboto'>{data.title}</h1>
          <ReactMarkdown className='roboto text'>{data.text}</ReactMarkdown>
          <div className='tabs'>
            {tabs.map((tab) => (
              <span key={tab} className='tab'>
                {tab}
              </span>
            ))}
          </div>
          <div className='input'>{data.nameInput}</div>
          <div className='select'>
            <span className='select__input'>{data.starter}</span>
            <div className='select__options'>
              {data.starterOptions.map((option) => (
                <span key={option} className='roboto select__option'>
                  {option.name}
                </span>
              ))}
            </div>
          </div>
          <div className='select'>
            <span className='select__input'>{data.mainCourse}</span>
            <div className='select__options'>
              {data.mainCourseOptions.map((option) => (
                <span key={option} className='select__option'>
                  {option.name}
                </span>
              ))}
            </div>
          </div>
          <label>
            <input type='checkbox' />
            {data.transport}
          </label>
        </div>
        <div className='confirmation roboto'>
          <h1 className='roboto'>{data.title}</h1>
          <ReactMarkdown className='roboto confirmation__message'>
            {data.successMessage}
          </ReactMarkdown>
        </div>
        <div className='confirmation roboto'>
          <h1 className='roboto'>{data.title}</h1>
          <ReactMarkdown className='roboto confirmation__error'>
            {data.errorMessage}
          </ReactMarkdown>
        </div>
      </>
    );
  } else {
    return <div>Loading...</div>;
  }
};

ConfirmationComponentPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default ConfirmationComponentPreview;
