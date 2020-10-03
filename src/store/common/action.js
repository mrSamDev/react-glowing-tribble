import Common from "./actionTypes";

export const toggleSnackBar = (data) => (dispatch) => {
  dispatch({ type: Common.SET_SNACKBAR, data });
};
