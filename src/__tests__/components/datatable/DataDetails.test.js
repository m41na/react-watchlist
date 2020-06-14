import React from "react";
import { shallow } from "enzyme";
import DataDetails from "../../../components/datatable/DataDetails";

describe("behavior of data row details when rendered", () => {
  
  it("should render data details with the expected description", () => {
    const component = shallow(<DataDetails dataSelected={undefined} />);
    expect(component.text()).toMatch(/Select table row to view full details.*/);
  });

  const initialProps = {
    Date: "2019-06-12",
    Open: "18.570000",
    High: "19.000000",
    Low: "18.530001",
    Close: "18.820000",
    "Adj Close": "18.552654",
    Volume: "62300",
  };

  it("should render data details with the expected description", () => {
    const component = shallow(<DataDetails dataSelected={initialProps} />);
    expect(component.text()).toMatch(/Adj Close: 18.552654.*/);
  });
});
