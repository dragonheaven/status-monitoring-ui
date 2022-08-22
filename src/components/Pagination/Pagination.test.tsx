import {render, screen, waitFor} from '@testing-library/react';
import Pagination from './index';
import React from "react";
import userEvent from "@testing-library/user-event";

describe('Pagination component', () => {
  it('render without crashing', async () => {
    const onChange = jest.fn();
    const wrapper = render(
      <Pagination totalCount={100} pageSize={10} curPage={3} onChange={onChange} />
    );

    expect(screen.getAllByRole('img', { hidden: true }).length).toBeGreaterThan(2);
    expect(screen.getAllByRole('button')).toHaveLength(8)

    const prevButton = wrapper.getByTestId('prevButton');

    userEvent.click(prevButton);
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledTimes(1);
    });

    const nextButton = wrapper.getByTestId('nextButton');

    userEvent.click(nextButton);
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledTimes(2);
    });
  });

  it('test when curPage is 1', async () => {
    const onChange = jest.fn();
    const wrapper = render(
      <Pagination totalCount={100} pageSize={10} curPage={1} onChange={onChange} />
    );

    const prevButton = wrapper.getByTestId('prevButton');

    userEvent.click(prevButton);
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledTimes(0);
    });
  });

  it('test when curPage is 10', async () => {
    const onChange = jest.fn();
    const wrapper = render(
      <Pagination totalCount={100} pageSize={10} curPage={10} onChange={onChange} />
    );

    const nextButton = wrapper.getByTestId('nextButton');

    userEvent.click(nextButton);
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledTimes(0);
    });
  });

  it('test when pageCount is less than 5', () => {
    const onChange = jest.fn();
    render(
      <Pagination totalCount={50} pageSize={10} curPage={3} onChange={onChange} />
    );

    expect(screen.getAllByRole('button')).toHaveLength(7)
  });

  it('test when curPage is less than 3', () => {
    const onChange = jest.fn();
    render(
      <Pagination totalCount={100} pageSize={10} curPage={2} onChange={onChange} />
    );

    expect(screen.getAllByRole('button')).toHaveLength(7)
  });

  it('test when click page button', () => {
    const onChange = jest.fn();
    const wrapper = render(
      <Pagination totalCount={100} pageSize={10} curPage={2} onChange={onChange} />
    );

    userEvent.click(wrapper.getByText('10'));
    expect(onChange).toHaveBeenCalledWith(10);
  });

  it('test when curPage is 9', () => {
    const onChange = jest.fn();
    render(
      <Pagination totalCount={100} pageSize={10} curPage={9} onChange={onChange} />
    );

    expect(screen.getAllByRole('button')).toHaveLength(8)
  });
});
