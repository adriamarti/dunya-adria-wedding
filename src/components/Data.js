import * as React from 'react';
import PropTypes from 'prop-types';

import Paragraph from './Paragraph';
import { Stack } from '@mui/material';

const Data = ({ label, value, color }) => (
  <Stack
    direction='column'
    spacing={0}
    alignItems={{ xs: 'center', sm: 'center', md: 'flex-start' }}
  >
    <Paragraph variant='body1' sx={{ fontWeight: '900', color: '#e27c6e' }}>
      {label}
    </Paragraph>
    <Paragraph
      variant='h5'
      component='span'
      sx={{
        textAlign: { xs: 'center', sm: 'center', md: 'left', color },
      }}
    >
      {value}
    </Paragraph>
  </Stack>
);

Data.defaultProps = {
  color: '#000000',
};

Data.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Data;
