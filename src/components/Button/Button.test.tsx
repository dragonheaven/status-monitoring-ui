import React from "react"
import { render } from "@testing-library/react"
import Button from "./index";
import userEvent from "@testing-library/user-event";

describe("test Button component", () => {
  it('should render without crashing', function () {
    const wrapper = render(<Button label="Button" variant="contained" size="sm" />);

    expect(wrapper.getByText("Button")).toHaveClass('bg-primary text-white hover:ring-2 hover:ring-orange-600');
  });

  it('should render without label', function () {
    const wrapper = render(<Button />);

    expect(wrapper.getByText("Button")).toBeInTheDocument();
  });

  it('spy onClick event', function () {
    const handleClick = jest.fn();

    const wrapper = render(
      <Button label="Button" variant="contained" onClick={handleClick} />
    );

    userEvent.click(wrapper.getByText('Button'));

    expect(handleClick).toHaveBeenCalled();
  });

  it('check loading status', function () {
    const wrapper = render(
      <Button label="Button" variant="contained" loading={true} />
    );

    expect(wrapper.getByRole('img', { hidden: true })).toHaveAttribute('data-icon', 'spinner');
  });
})
