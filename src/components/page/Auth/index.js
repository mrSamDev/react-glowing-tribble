import React from "react";
import Page from "../../molecules/Page";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core/styles";
import Lock from "@material-ui/icons/Lock";
import LockOpen from "@material-ui/icons/LockOpen";
import HowToReg from "@material-ui/icons/HowToReg";
import { useForm, FormProvider } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import LoginRegister from "./LoginRegister";
import Reset from "./ResetPassword";

const Auth = () => {
  const [isSignUp, setSignUp] = React.useState(false);

  const location = useLocation();

  const history = useHistory();

  const theme = useTheme();

  const isResetPassword = location.pathname === "/reset-password" && location.search.indexOf("?resetToken") > -1;

  React.useEffect(() => {
    if (location.pathname === "/reset-password" && location.search.indexOf("?resetToken") === -1) history.push("/", { replace: true });
  }, [isResetPassword]);

  const toggleSignUp = () => setSignUp((prev) => !prev);

  const { register, handleSubmit, errors, reset } = useForm({});

  const Icon = isResetPassword ? LockOpen : isSignUp ? HowToReg : Lock;

  const pageTitle = `${isSignUp ? "Register" : "Login"}`;

  return (
    <Page title={pageTitle}>
      <Container component="main" style={{ height: "100vh", alignItems: "center", justifyContent: "center", display: "flex" }}>
        <CssBaseline />
        <Paper elevation={2} style={{ borderRadius: 5 }}>
          <Grid container direction="row" justify="center" alignItems="stretch" style={{ backgroundColor: "#fff", borderRadius: 5, maxWidth: 756, minHeight: 300 }}>
            <Grid item md={6} xs={12} style={{ alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column", padding: "2rem", backgroundColor: theme.palette.primary.main }}>
              <Icon style={{ width: "auto", height: 100, color: "#fff" }} />
            </Grid>
            <Grid item md={6} xs={12} style={{ padding: "2rem", display: "flex", alignItems: "center" }}>
              <FormProvider reset={reset} handleSubmit={handleSubmit} errors={errors} register={register}>
                {isResetPassword ? <Reset /> : <LoginRegister toggleSignUp={toggleSignUp} isSignUp={isSignUp} />}
              </FormProvider>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Page>
  );
};

export default Auth;
