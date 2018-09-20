import React from "react";
import ItemDescription from "./ItemDescription";
import { shallow } from "enzyme";

describe("Stateful Testing", () => {
  it("Testing to see if isHovering is false", () => {
    const wrapper = shallow(<ItemDescription />);
    const hoverState = wrapper.state().isHovering;
    expect(hoverState).toEqual(false);
  });
});
