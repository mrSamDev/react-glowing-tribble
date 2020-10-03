import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PasswordField from "../../molecules/PasswordField";
import actions from "../../../store/auth/action";
import { useTheme } from "@material-ui/core/styles";
import { useFormContext } from "react-hook-form";
import { useDispatch } from "react-redux";

export default ({ isSignUp, toggleSignUp }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { handleSubmit, register, errors, reset } = useFormContext();

  const onThen = () => {
    if (isSignUp) toggleSignUp();
    reset();
  };

  const onSubmit = (data) => dispatch(actions.onAuth(data, isSignUp)).then(onThen);
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction="row" spacing={2} justify="center" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h2" color="primary">
              {isSignUp ? "Register" : "Login"}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField error={Boolean(errors.email)} variant="outlined" required inputRef={register({ required: true })} type="email" fullWidth id="email" label="Email Address" placeholder="Email Address" name="email" autoComplete="email" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12}>
            <PasswordField inputRef={register({ required: true })} error={Boolean(errors.password)} helperText={errors.password && errors.password.message} name="password" label="Password" />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" fullWidth variant="contained" color="primary">
              {isSignUp ? "Register" : "Login"}
            </Button>
            <Typography variant="subtitle2" onMouseUp={toggleSignUp} style={{ margin: "10px 0px" }}>
              {isSignUp ? "Have an account?" : "Don't have an account?"} <span style={{ color: theme.palette.primary.main }}>{isSignUp ? "Sign in" : "Sign up"}</span>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
};
