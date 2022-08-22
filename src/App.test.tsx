import React from "react"
import {render, screen, waitFor} from "@testing-library/react"
import App from "./App"
import userEvent from "@testing-library/user-event";
import data from "./data/data.json";

describe('test app', () => {
  it("renders learn react link", () => {
    render(
      <div>
        <div id="modal-root" />
        <App />
      </div>
    )
    const catElement = screen.getByText(/Create Server/i)
    expect(catElement).toBeInTheDocument()
  });

  it('test create server functionality', async () => {
    const wrapper = render(
      <div>
        <div id="modal-root" />
        <App />
      </div>
    );

    const createServerButton = wrapper.getByTestId('create-server');

    userEvent.click(createServerButton);
    expect(wrapper.getByTestId('server-modal')).toBeInTheDocument();

    userEvent.type(wrapper.getByPlaceholderText('Name'), 'New Server');
    userEvent.type(wrapper.getByPlaceholderText('CPU'), '9GHZ');
    userEvent.type(wrapper.getByPlaceholderText('Memory'), '8GB');
    userEvent.click(wrapper.getByText('Running'));

    await waitFor(() => {
      userEvent.click(wrapper.getByText('Save'));
    });

    await waitFor(() => {
      expect(wrapper.queryAllByTestId('table-row')).toHaveLength(4);
    });

    userEvent.click(createServerButton);
    await waitFor(() => {
      userEvent.click(wrapper.getByTestId('server-modal'));
    });
    expect(wrapper.queryByTestId('server-modal')).not.toBeInTheDocument();
  });

  it('test edit server functionality', async () => {
    const wrapper = render(
      <div>
        <div id="modal-root" />
        <App />
      </div>
    );

    let editServerButton: any;

    await waitFor(() => {
      editServerButton = wrapper.getAllByTestId('edit-server')[0];
      userEvent.click(editServerButton);
    });

    expect(wrapper.getByTestId('server-modal')).toBeInTheDocument();

    const server = data[0];
    expect(wrapper.getByPlaceholderText('Name')).toHaveValue(server.name);
    expect(wrapper.getByPlaceholderText('CPU')).toHaveValue(server.cpu);
    expect(wrapper.getByPlaceholderText('Memory')).toHaveValue(server.mem);

    userEvent.type(wrapper.getByPlaceholderText('Name'), 'Updated Server');
    userEvent.type(wrapper.getByPlaceholderText('CPU'), '10GHZ');
    userEvent.type(wrapper.getByPlaceholderText('Memory'), '64GB');

    userEvent.click(wrapper.getByText('Save'));

    await waitFor(() => {
      expect(wrapper.queryAllByTestId('table-row')).toHaveLength(4);
      expect(wrapper.getByText(/Updated Server/)).toBeInTheDocument();
    });

    userEvent.click(editServerButton);
    await waitFor(() => {
      userEvent.click(wrapper.getByTestId('server-modal'));
    });
    expect(wrapper.queryByTestId('server-modal')).not.toBeInTheDocument();
  });

  it('test delete server functionality', async () => {
    const wrapper = render(
      <div>
        <div id="modal-root" />
        <App />
      </div>
    );

    await waitFor(() => {
      userEvent.click(wrapper.getAllByTestId('delete-server')[0]);
    });

    await waitFor(() => {
      expect(wrapper.queryAllByTestId('table-row')).toHaveLength(3);
    });

    userEvent.type(wrapper.getByPlaceholderText(/Search servers.../), 'Server 2');

    await waitFor(() => {
      expect(wrapper.queryAllByTestId('table-row')).toHaveLength(1);
    });
  });
})
