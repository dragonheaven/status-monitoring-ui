import React from "react";
import { render, screen } from '@testing-library/react';
import { SearchInput } from './index';

describe('SearchInput component', () => {
  it('render without crashing', () => {
    const onChange = jest.fn();

    render(
      <SearchInput
        placeholder="Search products"
        value="shoes"
        onChange={onChange}
      />
    );

    expect(screen.getByTestId('search-input')).toBeInTheDocument();
    expect(screen.getByTestId('search-input')).toHaveAttribute('placeholder', "Search products");
  });
});
