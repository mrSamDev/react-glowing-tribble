import React from "react";
import Grid from "@material-ui/core/Grid";
import Page from "../../molecules/Page";
import Container from "../../atoms/Container";
import StickyHeadTable from "../../molecules/Table";
import Header from "../../molecules/Header";
import SearchBox from "../../atoms/Search";
import * as selectors from "../../../store/employee/selectors";
import actions from "../../../store/employee/actions";
import { connect } from "react-redux";
import DropDown from "../../atoms/DropDown";

const filters = ["position", "state"];

const EmployeeList = (props) => {
  const { employees, filterLists, filterValues } = props;

  const onChange = (event) => {
    props.filterEmployeeTable(event.target.name, event.target.value);
  };
  const handleSearch = (value) => {
    props.searchEmployeeTable(value);
  };

  return (
    <React.Fragment>
      <Header />
      <Page title="Employees">
        <Container fluid>
          <Grid style={{ marginBottom: 10, padding: 4 }}>
            <SearchBox onSearch={handleSearch} removeSearch={handleSearch} />
          </Grid>
          <Grid style={{ marginBottom: 10, padding: 4 }}>
            <Grid container direction="row" spacing={2}>
              {filters.map((filter) => {
                return (
                  <Grid item xs={12} md={6} sm={6}>
                    <DropDown name={filter} options={filterLists[filter]} value={filterValues[filter]} onChange={onChange} />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>

          <StickyHeadTable rows={employees} />
        </Container>
      </Page>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  employees: selectors.getEmployeeList.call(state.employee),
  filterLists: selectors.getEmployeeFilerOptions.call(state.employee),
  filterValues: selectors.getEmployeeFilerValues.call(state.employee),
});

const mapDispatchToProps = (dispatch) => ({
  filterEmployeeTable: (...args) => dispatch(actions.filterEmployeeTables(...args)),
  searchEmployeeTable: (...args) => dispatch(actions.onSearchEmployeeTable(...args)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
