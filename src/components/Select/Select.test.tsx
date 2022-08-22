import { render, screen } from '@testing-library/react';
import Select from './index';
import React from "react";
import userEvent from "@testing-library/user-event";

const options = [
  {
    label: 'Option 1',
    value: 'option 1',
  },
  {
    label: 'Option 2',
    value: 'option 2',
  },
  {
    label: 'Option 3',
    value: 'option 3',
  }
];

describe('Select component', () => {
  it('render without crashing', () => {
    const onChange = jest.fn();
    render(
      <Select
        placeholder="Select Option"
        value=""
        onChange={onChange}
        options={options}
      />
    );

    expect(screen.getByText('Select Option')).toBeInTheDocument();
    expect(screen.getAllByTestId('select-option')).toHaveLength(options.length);
  });

  it('render with value', () => {
    const onChange = jest.fn();
    const wrapper = render(
      <Select
        placeholder="Select Option"
        value="option 1"
        onChange={onChange}
        options={options}
      />
    );

    expect(screen.getAllByText('Option 1').length).toBeGreaterThan(1);
    expect(screen.getAllByTestId('select-option')).toHaveLength(options.length);

    userEvent.click(wrapper.getByText('Option 3'));
    expect(onChange).toHaveBeenCalledTimes(1);

    userEvent.click(wrapper.getByTestId('toggle'));

    expect(wrapper.getByRole('img', { hidden: true })).toHaveClass('transform rotate-180');
  });

  it('render without options', () => {
    const onChange = jest.fn();
    render(
      <Select
        placeholder="Select Option"
        value=""
        onChange={onChange}
      />
    );

    expect(screen.queryAllByTestId('select-option')).toHaveLength(0);
  });
});
