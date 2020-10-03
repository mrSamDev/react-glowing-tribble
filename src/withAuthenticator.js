import React from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import Auth from "./components/page/Auth";
import GlobalStyles from "./GlobalStyles";
import * as authSelectors from "./store/auth/selectors";
import authActions from "./store/auth/action";
import SnackBar from "./components/molecules/SnackBar";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  isUserAuthenticated: authSelectors.isUserAuthenticated.call(state.auth),
});

const mapDispatchToProps = (dispatch) => ({
  _checkAndRedirect: () => dispatch(authActions.checkUserToken()),
});

const withAuthenticator = (ComposedComponent) => {
  const Wrapper = ({ isUserAuthenticated, _checkAndRedirect }) => {
    React.useEffect(() => {
      _checkAndRedirect();
    }, []);

    let Component = <React.Fragment />;
    if (isUserAuthenticated) Component = <ComposedComponent />;
    else Component = <Auth />;

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {Component}
        <SnackBar />
      </ThemeProvider>
    );
  };

  return connect(mapStateToProps, mapDispatchToProps)(Wrapper);
};

export default withAuthenticator;
