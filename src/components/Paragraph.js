import * as React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@mui/material';

const Paragraph = ({ variant, component, sx, children }) => (
  <Typography
    variant={variant}
    component={component ?? 'p'}
    sx={{ color: '#3e554c', ...sx }}
  >
    {children}
  </Typography>
);

Paragraph.defaultProps = {
  variant: 'body1',
  component: null,
  sx: {},
};

Paragraph.propTypes = {
  variant: PropTypes.string,
  component: PropTypes.string,
  sx: PropTypes.object,
};

export default Paragraph;
