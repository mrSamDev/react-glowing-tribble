import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
export default function Container(props) {
  const theme = useTheme();
  const isWidthDownXs = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Grid container direction="column" alignContent={"stretch"} style={{ padding: props.disablePadding ? 0 : isWidthDownXs ? 10 : 8 * 4, ...props.additionalStyles, maxWidth: props.fluid ? "auto" : 1400, margin: "0px auto" }}>
      {props.children}
    </Grid>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
