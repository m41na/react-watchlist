import React from "react";
import { shallow } from "enzyme";
import DashBoard from "../../../components/dashboard/DashBoard";
import { Grid } from "@material-ui/core";

describe("behavior of dashboard when rendered", () => {
  const initialProps = {
    symbol: "SPY",
    setSymbol: jest.fn(),
    removeSymbol: jest.fn(),
    updateSymbol: jest.fn(),
  };
  it("should render dashboard without the desription grid", () => {
    const component = shallow(<DashBoard {...initialProps} />);
    expect(component.find(Grid)).toHaveLength(3);
  });

  const oneDataRow = {...initialProps,
    symbol: "NDX",
    quotes: {
      data: [{"Date":"2019-06-12","Open":"18.570000","High":"19.000000","Low":"18.530001","Close":"18.820000","Adj Close":"18.552654","Volume":"62300"}],
      headers: ["Open","Close","High","Low","Volume"],
      symbols: [{"symbol":"NDX","name":"NASDAQ 100 (^NDX)","description":"Nasdaq GIDS - Nasdaq GIDS Real Time Price. Currency in USD"}]
    }
  };
  it("should render dashboard with the description grid", () => {
    const component = shallow(<DashBoard {...oneDataRow} />);
    expect(component.find(Grid)).toHaveLength(4);
    expect(component.find(Grid).at(2).text()).toMatch(/Nasdaq GIDS - Nasdaq GIDS Real Time Price. Currency in USD/);
  });
});
