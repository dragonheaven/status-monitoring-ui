import React from "react"
import { Meta } from "@storybook/react/types-6-0"
import data from "../../mock/data.json";
import { Table } from "./index";
import {IServer} from "../../shared/interface";

export default {
    title: "Component/Table",
    component: Table,
    argTypes: {
        type: { control: "string" }
    }
} as Meta

export const Dashboard = () => {
  const columns = [
    {
      label: 'Name',
      value: 'name',
      className: 'bg-blue-700 text-white w-120',
    },
    {
      label: 'CPU',
      value: 'cpu',
      className: 'bg-blue-700 text-white',
    },
    {
      label: 'Memory',
      value: 'mem',
      className: 'bg-blue-700 text-white',
    },
    {
      label: 'State',
      value: 'state',
      className: 'bg-blue-700 text-white',
    }
  ];

  return (
    <>
      <div className="mb-10 flex">
        <Table data={data as IServer[]} columns={columns} />
      </div>
    </>
  );
}
