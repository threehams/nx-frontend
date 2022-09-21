import { render, fireEvent } from "@testing-library/react";

import { HomePage } from "./HomePage";

describe("HomePage", () => {
  it("should render successfully", () => {
    const { getByText } = render(<HomePage />);
    fireEvent.click(getByText("Primary"));
  });
});
