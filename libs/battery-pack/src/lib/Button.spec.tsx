import { render } from "@testing-library/react";

import { Button } from "./Button";

describe("Button", () => {
  it("should render successfully", () => {
    const { getByText } = render(<Button variant="primary">Hi</Button>);
    getByText("Hi");
  });
});
