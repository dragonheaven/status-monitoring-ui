import React from "react"
import { Meta } from "@storybook/react/types-6-0"
import data from "../../mock/data.json";
import ServerTable from "./index";
import {IServer} from "../../shared/interface";

export default {
    title: "Component/ServerTable",
    component: ServerTable,
    argTypes: {
        type: { control: "string" }
    }
} as Meta

export const Dashboard = () => {
  return (
    <>
      <div className="mb-10 flex">
        <ServerTable data={data as IServer[]} />
      </div>
    </>
  );
}
