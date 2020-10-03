import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { configure } from "enzyme";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  shallow(<App />);
});
