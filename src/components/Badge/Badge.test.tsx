import React from "react"
import { render } from "@testing-library/react"
import Badge from "./index";

describe("test Badge component", () => {
  it('should render without crashing', function () {
    const wrapper = render(<Badge type="secondary" label="Running" />);

    expect(wrapper.getByText("Running")).toHaveClass('bg-red-500 bg-opacity-15');
  });

  it('test render without type', function () {
    const wrapper = render(<Badge label="Running" />);

    expect(wrapper.getByText("Running")).toHaveClass('bg-green-500 bg-opacity-70');
  });
})
