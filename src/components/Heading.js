import * as React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@mui/material';

const Heading = ({ variant, component, sx, children }) => (
  <Typography
    variant={variant}
    component={component ?? variant}
    sx={{
      ...sx,
      color: 'rgba(0, 0, 0, 0.87)',
      fontFamily: "'Abril Fatface', cursive",
    }}
  >
    {children}
  </Typography>
);

Heading.defaultProps = {
  variant: 'h1',
  component: null,
  sx: {},
};

Heading.propTypes = {
  variant: PropTypes.string,
  component: PropTypes.string,
  sx: PropTypes.object,
};

export default Heading;
