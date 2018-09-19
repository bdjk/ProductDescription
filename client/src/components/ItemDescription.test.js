import React from "react";
import ItemDescription from "./ItemDescription";
import { shallow } from "enzyme";

describe("Item Page exists", () => {
  it("Testing if this works", () => {
    const wrapper = shallow(<ItemDescription />);
    const hoverState = wrapper.state.isHovering;
    expect(hoverState).toEqual(false);
  });
});
