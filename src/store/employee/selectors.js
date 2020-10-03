export function getEmployeeList() {
  return this.employees;
}

export function getEmployeeFilerOptions() {
  return { state: this.state, position: this.position };
}
export function getEmployeeFilerValues() {
  return this.filters;
}
