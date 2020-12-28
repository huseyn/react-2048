import React from "react";
import { shallow } from "enzyme";
import Board from "./Board";

describe("Board", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Board />)));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it("should render a div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render an instance of the Square component for each square", () => {
    const squares = [
      { displayValue: "0" },
      { displayValue: "1" },
      { displayValue: "2" },
    ];

    wrapper.setState({ squares });
    expect(wrapper.find("Square").length).toEqual(squares.length);
  });
});
