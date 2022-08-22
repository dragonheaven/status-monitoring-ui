import { render, waitFor } from '@testing-library/react';
import ServerDetailModal from './index';
import React from "react";
import data from "../../data/data.json";
import {IServer} from "../../shared/interface";
import StorybookProvider from "../StorybookProvider";
import userEvent from "@testing-library/user-event";

describe('ServerDetailModal component', () => {
  it('render without crashing', async () => {
    const onClose = jest.fn();
    const server = data[0] as IServer;

    const wrapper = render(
      <StorybookProvider>
        <ServerDetailModal
          server={server}
          open={true}
          onClose={onClose}
        />
      </StorybookProvider>
    );

    expect(wrapper.getAllByText(server.name)).toHaveLength(2);
    expect(wrapper.getByText(server.cpu)).toBeInTheDocument();
    expect(wrapper.getByText(server.mem)).toBeInTheDocument();
    expect(wrapper.getByText('Stopped')).toHaveClass('bg-red-500 bg-opacity-15');

    userEvent.click(wrapper.getByTestId('modal-wrapper'));
    await waitFor(() => {
      expect(onClose).not.toHaveBeenCalled();
    });
    userEvent.click(wrapper.getByTestId('server-detail-modal'));

    await waitFor(() => {
      expect(onClose).toHaveBeenCalled();
    });
  });

  it('test running badge', async () => {
    const onClose = jest.fn();
    const server = data[1] as IServer;

    const wrapper = render(
      <StorybookProvider>
        <ServerDetailModal
          server={server}
          open={true}
          onClose={onClose}
        />
      </StorybookProvider>
    );

    expect(wrapper.getByText('Running')).toHaveClass('bg-green-500 bg-opacity-70');
  });
});
