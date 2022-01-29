import * as React from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import Box from '@mui/material/Box';

export default function Markdown({ sx, children }) {
  return (
    <Box
      sx={{
        fontSize: '16px',
        lineHeight: '24px',
        fontFamily: "'Roboto', sans-serif",
        color: '#3e554c',
        marginTop: { xs: '32px !important', md: '48px' },
        '& h1': {
          fontSize: '48px',
          fontWeight: '400',
          margin: '60px 0 40px 0',
          lineHeight: '58px',
        },
        '& h2': {
          fontSize: '48px',
          fontWeight: '400',
          margin: '60px 0 40px 0',
          lineHeight: '58px',
        },
        '& h3': {
          fontSize: '48px',
          fontWeight: '400',
          margin: '60px 0 40px 0',
          lineHeight: '58px',
        },
        '& h4': {
          fontSize: '34px',
          fontWeight: '400',
          margin: '60px 0 40px 0',
          lineHeight: '44px',
        },
        '& h5': {
          fontSize: '34px',
          fontWeight: '400',
          margin: '60px 0 40px 0',
          lineHeight: '44px',
        },
        '& h6': {
          fontSize: '20px',
          fontWeight: '500',
          margin: '60px 0 40px 0',
          lineHeight: '30px',
        },
        '& ul': {
          margin: '20px 0',
          paddingLeft: '20px',
        },
        '& ol': {
          margin: '20px 0',
          paddingLeft: '20px',
        },
        '& strong': {
          fontWeight: '900',
        },
        '& p': {
          marginBottom: '20px',
        },
        '& a': {
          color: '#e27c6e',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        },
        ...sx,
      }}
    >
      <ReactMarkdown>{children}</ReactMarkdown>
    </Box>
  );
}
