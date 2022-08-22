import { render } from '@testing-library/react';
import Input from './index';
import React from "react";
import userEvent from "@testing-library/user-event";

describe('test Input component', () => {
  it('render without crashing', () => {
    const handleChange = jest.fn();
    const handleFocus = jest.fn();

    const wrapper = render(
      <Input
        label='Name'
        type='text'
        name='name'
        onChange={handleChange}
        onFocus={handleFocus}
        placeholder="Name..."
        helperText="Name is required"
        autoFocus
        value='John Doe'
      />
    );

    expect(wrapper.getByText('Name')).toBeInTheDocument();
    expect(wrapper.getByRole('textbox')).toHaveValue('John Doe')
    expect(wrapper.getByText(/Name is required/)).toBeInTheDocument();

    userEvent.type(wrapper.getByRole('textbox'), 'hello');
    expect(handleChange).toHaveBeenCalled();
  });
});
