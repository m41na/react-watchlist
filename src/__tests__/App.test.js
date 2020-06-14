import React from "react";
import { shallow } from "enzyme";
import App, { Copyright } from "../App";
import Toolbar from "@material-ui/core/Toolbar";

describe("expected text on the home page", () => {
  it("should render a page header and footer", () => {
    const component = shallow(<App />);
    expect(component.find(Toolbar).length).toBe(1);
    expect(component.find(Copyright).length).toBe(1);
    expect(component.find("footer").text()).toMatch(
      /React Watchlist dashboard.*/
    );
  });
});
