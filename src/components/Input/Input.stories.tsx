import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import Input, { InputProps } from "."

export default {
    title: "Forms/Input",
    component: Input,
    argTypes: {
        type: { control: "string" }
    }
} as Meta

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Dashboard = () => (
  <>
    <div className="mb-10 max-w-120">
      <Template name="Name" placeholder="Name" className="w-80 mb-3" />
      <Template name="Name" placeholder="Name" className="w-80 mb-3" value="John doe" />
      <Template name="Name" placeholder="Name" className="w-80 mb-3" helperText="Name is required" />
    </div>
  </>
);
