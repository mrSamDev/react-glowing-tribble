import LoginSignUp from "./actionTypes";

const initialState = {
  isAuthProcessing: false,
  isUserAuthenticated: false,
};

const AuthStore = (state = initialState, action) => {
  switch (action.type) {
    case LoginSignUp.SET_AUTH_PROCESSING:
      return {
        ...state,
        isAuthProcessing: action.data,
      };

    case LoginSignUp.SET_IS_USER_AUTHENTICATED:
      return {
        ...state,
        isUserAuthenticated: action.data,
      };

    default:
      return state;
  }
};

export default AuthStore;
