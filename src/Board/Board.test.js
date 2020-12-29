import React from "react";
import { shallow } from "enzyme";
import Board from "./Board";

describe("Board", () => {
  let wrapper;
  let squares;

  beforeEach(() => {
    wrapper = shallow(<Board />);
    squares = [
      { id: 1, displayValue: "" },
      { id: 2, displayValue: "" },
      { id: 3, displayValue: "" },
      { id: 4, displayValue: "" },
    ];
  });

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());

  it("should render a div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render an instance of the Square component for each square", () => {
    wrapper.setState({ squares });
    expect(wrapper.find("Square").length).toEqual(squares.length);
  });

  it("setRandomValue", () => {
    wrapper.setState({ squares });
    wrapper.instance().setRandomValue();
    expect(squares.filter((x) => x.displayValue !== "").length).toEqual(2);
  });

  it("updateDisplayValue", () => {
    let obj = { id: 1, displayValue: "" };
    obj = wrapper.instance().updateDisplayValue(obj, "2");
    expect(obj).toMatchObject({ id: 1, displayValue: "2" });
  });
});
