import * as React from "react";
import PropTypes from "prop-types";

import { Stack, Typography } from "@mui/material";

const Data = ({ label, value, color }) => (
  <Stack
    direction="column"
    spacing={0}
    alignItems={{ xs: "center", sm: "center", md: "flex-start" }}
  >
    <Typography
      variant="body1"
      component="span"
      sx={{ fontWeight: "900", color }}
    >
      {label}
    </Typography>
    <Typography
      variant="h4"
      component="span"
      sx={{
        fontWeight: "100",
        color,
        textAlign: { xs: "center", sm: "center", md: "left" },
      }}
    >
      {value}
    </Typography>
  </Stack>
);

Data.defaultProps = {
  color: "#000000",
};

Data.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Data;
