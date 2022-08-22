import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import ServerDetailModal , { IServerDetailModalProps } from ".";
import data from '../../data/data.json';
import {IServer} from "../../shared/interface";
import StorybookProvider from "../StorybookProvider";

export default {
    title: "Component/ServerDetailModal",
    component: ServerDetailModal,
    argTypes: {
        type: { control: "string" }
    }
} as Meta

const Template: Story<IServerDetailModalProps> = (args) => <ServerDetailModal {...args} />;

export const Dashboard = () => (
  <StorybookProvider>
    <div className="mb-10 max-w-120">
      <Template server={data[0] as IServer} open={true} onClose={() => {}} />
    </div>
  </StorybookProvider>
);
