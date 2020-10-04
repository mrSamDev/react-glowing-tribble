import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PasswordField from "../../molecules/PasswordField";
import { useTheme } from "@material-ui/core/styles";
import { useFormContext } from "react-hook-form";
import { useHistory } from "react-router-dom";
export default ({}) => {
  const theme = useTheme();
  const history = useHistory();
  const { handleSubmit, register, errors } = useFormContext();
  const onSubmit = (data) => {};

  const reset = () => {
    history.push("/", { replace: true });
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction="row" spacing={2} justify="center" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h2" color="primary">
              {"Reset"}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <PasswordField inputRef={register({ required: true })} error={Boolean(errors.password)} helperText={errors.password && errors.password.message} name="password" label="Password" />
          </Grid>
          <Grid item xs={12}>
            <PasswordField inputRef={register({ required: true })} error={Boolean(errors.confirmPassword)} helperText={errors.confirmPassword && errors.confirmPassword.message} name="confirmPassword" label="Password" />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" fullWidth variant="contained" color="primary">
              {"Reset"}
            </Button>
            <Typography variant="subtitle2" onMouseUp={reset} style={{ margin: "10px 0px" }}>
              {"Have an account?"} <span style={{ color: theme.palette.primary.main }}>{"Sign in"}</span>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
};
