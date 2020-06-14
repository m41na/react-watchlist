import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { AuthProvider } from "../../context/AuthContext";

const MockComponent = ({ name }) => {
  return (
    <div>
      <span id="name">Name: {name}</span>
    </div>
  );
};

describe("component wrapped in AuthProvider", () => {
  const { getByText } = render(
    <AuthProvider>
      <MockComponent name={"tester"} />
    </AuthProvider>
  );

  it("should have the child component available", () => {
    expect(getByText(/^Name: /)).toHaveTextContent("tester");
  });
});
