import * as React from 'react';
import PropTypes from 'prop-types';

import { Stack } from '@mui/material';

const ImageWrapper = ({ sx, children }) => (
  <Stack alignItems='center' sx={sx}>
    {children}
  </Stack>
);

ImageWrapper.defaultProps = {
  sx: null,
};

ImageWrapper.propTypes = {
  sx: PropTypes.object,
};

export default ImageWrapper;
