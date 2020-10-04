import actionTypes from "./actionTypes";

import { employeeList } from "../dummyData";

const initialState = {
  employees: employeeList,
  state: ["Kerala", "Tamil nadu", "Karnataka"],
  position: ["position 1", "position 2", "position 3", "position 4"],
  filters: {
    state: "",
    position: "",
  },
};

const Employee = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_EMPLOYEE_LIST:
      return {
        ...state,
        employees: action.payload,
      };

    case actionTypes.SET_EMPLOYEE_FILTER:
      return {
        ...state,
        filters: { ...state.filters, ...action.payload },
      };
    default:
      return state;
  }
};

export default Employee;
