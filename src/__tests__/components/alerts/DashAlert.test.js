import React from "react";
import { render } from "@testing-library/react";
import DashAlert from "../../../components/alerts/DashAlert";
import { ALERT_SUCCESS_TYPE } from "../../../constants";

describe("behavior of alert when toggled", () => {
  const alert = {
    type: ALERT_SUCCESS_TYPE,
    message: "Testing alert",
    dismissable: false,
    action: jest.fn(),
  };
  it("should render alert with expected message", () => {
    const { getByText } = render(<DashAlert {...alert} />);
    const messageElement = getByText(/Testing alert/i);
    expect(messageElement).toBeInTheDocument();
  });
});
