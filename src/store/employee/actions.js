import actionTypes from "./actionTypes";
import matchSorter from "match-sorter";
import * as selectors from "./selectors";
import { employeeList } from "../dummyData";

const filterEmployeeTables = (name = null, value = null) => (dispatch, getState) => {
  try {
    dispatch({ type: actionTypes.SET_EMPLOYEE_FILTER, payload: name ? { [name]: value } : {} });

    const state = getState().employee;

    const filterValues = { ...selectors.getEmployeeFilerValues.call(state), ...(!name ? {} : { [name]: value }) };
    console.log("filterValues: ", filterValues);

    let list = JSON.parse(JSON.stringify(employeeList));

    if (Boolean(filterValues.position)) {
      list = list.filter((item) => {
        if (item.position === filterValues.position) return item;
      });
    }

    if (Boolean(filterValues.state)) {
      list = list.filter((item) => {
        if (item.state === filterValues.state) return item;
      });
    }

    dispatch({ type: actionTypes.SET_EMPLOYEE_LIST, payload: list });
  } catch (error) {
    throw error;
  }
};

const onSearchEmployeeTable = (value) => (dispatch, getState) => {
  try {
    const list = selectors.getEmployeeList.call(getState().employee);

    if (!Boolean(value)) return dispatch(filterEmployeeTables());

    const searchedList = matchSorter(list, value, { keys: ["name", "position", "state"] });
    console.log("searchedList: ", searchedList);

    dispatch({ type: actionTypes.SET_EMPLOYEE_LIST, payload: searchedList });
  } catch (error) {
    throw error;
  }
};

export default { filterEmployeeTables, onSearchEmployeeTable };
