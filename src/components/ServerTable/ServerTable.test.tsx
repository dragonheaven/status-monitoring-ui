import {render} from '@testing-library/react';
import React from "react";
import data from "../../data/data.json";
import { IServer } from "../../shared/interface";
import ServerTable from "./index";

describe('ServerModal component', () => {
  it('render without crashing', async () => {
    const wrapper = render(
      <ServerTable data={data as IServer[]} />
    );

    expect(wrapper.queryAllByTestId('table-row')).toHaveLength(data.length);
  });
});
