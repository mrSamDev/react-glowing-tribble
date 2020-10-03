import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toggleSnackBar } from "../../store/common/action";
import * as selectors from "../../store/common/selectors";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} style={{ minWidth: 300, width: "100%" }} />;
}

const SnackBar = (props) => {
  const { snackbar } = props;

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    props.toggleSnackBar({ open: false });
  };

  return (
    <Snackbar autoHideDuration={5000} style={{ zIndex: 10000 }} anchorOrigin={{ vertical: "bottom", horizontal: "left" }} open={snackbar.open} onClose={handleClose}>
      <Alert onClose={handleClose} severity={snackbar.variant}>
        {snackbar.message}
      </Alert>
    </Snackbar>
  );
};

const mapStateToProps = (state) => {
  const snackbar = selectors.getSnackBar(state);
  return {
    snackbar,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSnackBar: (data) => dispatch(toggleSnackBar(data)),
  };
};

SnackBar.propTypes = {
  snackbar: PropTypes.object,
  toggleSnackBar: PropTypes.func,
};

SnackBar.defaultProps = {
  snackbar: {
    open: false,
    message: "",
    variant: "success",
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(SnackBar);
