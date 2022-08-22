import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import Badge, { BadgeProps } from "."

export default {
    title: "Component/Badge",
    component: Badge,
    argTypes: {
        type: { control: "string" }
    }
} as Meta

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Dashboard = () => (
  <>
    <div className="mb-10 flex">
      <Badge type="primary" label="Primary" className="mr-10" />
      <Badge type="secondary" label="Secondary" />
    </div>
  </>
);

export const Primary = () => (
  <>
    <div className="mb-10 flex">
      <Badge type="primary" label="Primary" className="mr-10" />
    </div>
  </>
);

export const Secondary = () => (
  <>
    <div className="mb-10 flex">
      <Badge type="secondary" label="Secondary" />
    </div>
  </>
);
