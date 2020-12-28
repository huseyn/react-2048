import React from "react";
import { shallow } from "enzyme";
import Board from "./Board";

describe("Board", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Board />)));

  it("should render a div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render an instance of the Square component", () => {
    expect(wrapper.find("Square").length).toEqual(1);
  });
});
