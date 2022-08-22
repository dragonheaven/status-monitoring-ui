import {render} from '@testing-library/react';
import ServerModal from './index';
import React from "react";
import data from "../../data/data.json";
import { IServer } from "../../shared/interface";
import StorybookProvider from "../StorybookProvider";
import userEvent from "@testing-library/user-event";

describe('ServerModal component', () => {
  it('render without crashing', async () => {
    const onClose = jest.fn();
    const server = data[0] as IServer;

    const wrapper = render(
      <StorybookProvider>
        <ServerModal
          server={server}
          open={true}
          onClose={onClose}
        />
      </StorybookProvider>
    );

    expect(wrapper.getByPlaceholderText('Name')).toHaveValue(server.name);
    expect(wrapper.getByPlaceholderText('CPU')).toHaveValue(server.cpu);
    expect(wrapper.getByPlaceholderText('Memory')).toHaveValue(server.mem);

    userEvent.click(wrapper.getByTestId('modal-wrapper'));
    expect(onClose).not.toHaveBeenCalled();
    userEvent.click(wrapper.getByTestId('server-modal'));
    expect(onClose).toHaveBeenCalled();

    userEvent.click(wrapper.getByText('Save'));
    expect(onClose).toHaveBeenCalled();
  });

  it('test create functionality', async () => {
    const onClose = jest.fn();

    const wrapper = render(
      <StorybookProvider>
        <ServerModal
          open={true}
          onClose={onClose}
        />
      </StorybookProvider>
    );

    expect(wrapper.getByPlaceholderText('Name')).toHaveValue('');
    expect(wrapper.getByPlaceholderText('CPU')).toHaveValue('');
    expect(wrapper.getByPlaceholderText('Memory')).toHaveValue('');
    userEvent.click(wrapper.getByText('Save'));
  });
});
