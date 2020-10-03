import service from "./serviceLayer";
import AuthTypes from "./actionTypes";
import { toggleSnackBar } from "../common/action";
import { users } from "../dummyData";
import { messages, snackBarVariants } from "../contants";

const setAuth = (data) => ({ type: AuthTypes.SET_IS_USER_AUTHENTICATED, data });

const onAuth = ({ email, password }, isSignUp) => async (dispatch) => {
  try {
    const user = users.find((user) => user.email === email);
    if (isSignUp) {
      if (user) return dispatch(toggleSnackBar({ open: true, message: messages.USER_EXISTS, variant: snackBarVariants.error }));

      users.push({ email, password });
      return dispatch(toggleSnackBar({ open: true, message: messages.REGISTER_SUCCESS, variant: snackBarVariants.success }));
    }

    if (!user) return dispatch(toggleSnackBar({ open: true, message: messages.NOT_FOUND, variant: snackBarVariants.error }));
    const doesUserMatch = user.password === password;
    if (doesUserMatch) {
      service.setToken();
      dispatch(setAuth(true));
      return dispatch(toggleSnackBar({ open: true, message: messages.LOGIN_SUCCESS, variant: snackBarVariants.success }));
    }
    dispatch(toggleSnackBar({ open: true, message: messages.PASSWORD_MISMATCH, variant: snackBarVariants.error }));
    return dispatch(setAuth(false));
  } catch (error) {
    dispatch(toggleSnackBar({ open: true, message: error.message, variant: snackBarVariants.error }));
    dispatch(setAuth(false));
    throw error;
  }
};

const checkUserToken = () => (dispatch) => {
  try {
    if (Boolean(service.checkToken())) return dispatch(setAuth(true));
    dispatch(setAuth(false));
  } catch (error) {
    throw error;
  }
};

const onLogout = () => (dispatch) => {
  service.removeToken();
  dispatch(setAuth(false));
  dispatch(toggleSnackBar({ open: true, message: messages.LOGOUT, variant: snackBarVariants.success }));
};

export default {
  onAuth,
  checkUserToken,
  onLogout,
};
