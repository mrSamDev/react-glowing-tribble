import Common from "./actionTypes";

const initialState = {
  snackbar: { open: false },
};

const CustomerRedux = (state = initialState, action) => {
  switch (action.type) {
    case Common.SET_SNACKBAR:
      return {
        ...state,
        snackbar: action.data,
      };

    default:
      return state;
  }
};
export default CustomerRedux;
