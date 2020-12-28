import React from "react";
import { shallow } from "enzyme";
import Square from "./Square";

describe("Square", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Square />);
  });

  it("should render a <div/>", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
});
