import React from "react";
import { render } from "@testing-library/react";
import DashDialog from "../../../components/alerts/DashDialog";

describe("behavior of prompt dialog when toggled", () => {
  const prompt = {
    show: true,
    message: "Testing dialog",
    accept: "Ok",
    decline: "Cancel",
    onAccept: jest.fn(),
  };
  it("should render dialog with expected prompt", () => {
    const { getByText } = render(<DashDialog {...prompt} />);
    const messageElement = getByText(/Testing dialog/i);
    expect(messageElement).toBeInTheDocument();
  });
});
