import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import HourglassEmpty from "@material-ui/icons/HourglassEmpty";

const EmptyState = ({ type, disablePaper, disabelMinHeight, onClick }) => (
  <Grid component={disablePaper ? "div" : Paper} style={{ minHeight: disabelMinHeight ? 20 : 150, padding: 10, textAlign: "center" }} container direction="column" justify="center" alignItems="center" spacing={3}>
    <Grid item>
      <Grid style={{ padding: "1rem" }}>
        <HourglassEmpty size={60} color="#546e7a" />
      </Grid>
      <Typography variant="h6" color="textSecondary">
        Empty
      </Typography>
    </Grid>
  </Grid>
);

EmptyState.propTypes = {
  type: PropTypes.string,
  disablePaper: PropTypes.bool,
  disabelMinHeight: PropTypes.bool,
  onClick: PropTypes.func,
};

export default EmptyState;
