import {render, waitFor} from '@testing-library/react';
import React from "react";
import StorybookProvider from "../../components/StorybookProvider";
import HomePage from "./index";
import userEvent from "@testing-library/user-event";
import data from '../../data/data.json';

describe('Home page', () => {
  it('render without crashing', async () => {
    const wrapper = render(
      <StorybookProvider>
        <HomePage />
      </StorybookProvider>
    );

    expect(wrapper.getByPlaceholderText(/Search servers.../)).toBeInTheDocument();

    await waitFor(() => {
      const viewButton = wrapper.getAllByTestId('view-server')[0];
      userEvent.click(viewButton);

      expect(wrapper.queryByTestId('server-detail-modal')).toBeInTheDocument();
    });

    await waitFor(() => {
      userEvent.click(wrapper.getByTestId('server-detail-modal'));
    });
    expect(wrapper.queryByTestId('server-detail-modal')).not.toBeInTheDocument();

    await waitFor(() => {
      expect(wrapper.queryAllByTestId('table-row')).toHaveLength(3);
    });
  });
});
