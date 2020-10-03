import React from "react";
import "./App.css";
import withAuthenticator from "./withAuthenticator";
import EmployeeList from "./components/page/Employees";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const Wrapped = withAuthenticator(EmployeeList);

export default () => (
  <Provider store={store}>
    <BrowserRouter>
      <Wrapped />
    </BrowserRouter>
  </Provider>
);
