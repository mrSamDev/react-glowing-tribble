import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/icons/Input";
import action from "../../store/auth/action";
import { useDispatch } from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    background: theme.palette.primary.dark,
    minHeight: 75,
    display: "flex",
    justifyContent: "center",
  },
}));

const Header = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar elevation={0} position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            EmployeeList
          </Typography>

          <IconButton color="inherit" onMouseUp={() => dispatch(action.onLogout())}>
            <Input />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
