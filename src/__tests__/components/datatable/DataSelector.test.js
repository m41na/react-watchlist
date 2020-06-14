import React from "react";
import { shallow } from "enzyme";
import DataSelector from "../../../components/datatable/DataSelector";
import { Grid, Select } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

describe("behavior of data selector when rendered", () => {
  const initialProps = {
    selected: "SPY",
    setSymbol: jest.fn(),
    removeSymbol: jest.fn(),
    updateSymbol: jest.fn(),
  };
  it("should render data selector with the expected controls", () => {
    const component = shallow(<DataSelector {...initialProps} />);
    expect(component.find(Grid)).toHaveLength(4);
    expect(component.find(DeleteIcon)).toHaveLength(1);
    expect(component.find(Select)).toHaveLength(1);
  });
});
