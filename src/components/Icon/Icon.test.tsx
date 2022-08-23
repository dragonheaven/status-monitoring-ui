import React from "react";
import { render, screen } from '@testing-library/react';
import Icon from './index';

describe('test Icon component', () => {
  it('render without crashing', () => {
    render(
      <Icon icon='chevron-down' />
    );

    expect(screen.getByRole('img', { hidden: true })).toHaveAttribute('data-icon', 'chevron-down');
  });
});
