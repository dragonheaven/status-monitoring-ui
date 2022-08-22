import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import Button, { ButtonProps } from "."

export default {
    title: "Component/Button",
    component: Button,
    argTypes: {
        type: { control: "string" }
    }
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Dashboard = () => {
  const variants = [
    {
      label: 'Contained Buttons',
      value: 'contained',
    },
    {
      label: 'Outlined Buttons',
      value: 'outlined',
    },
    {
      label: 'Text Buttons',
      value: 'text',
    },
  ] as any;
  const sizes = [
    {
      label: 'Small',
      value: 'sm',
    },
    {
      label: 'Medium',
      value: 'md',
    },
    {
      label: 'Large',
      value: 'lg',
    }
  ] as any;
  const colors = [
    {
      label: 'Primary',
      value: 'primary',
    },
    {
      label: 'Secondary',
      value: 'secondary',
    },
    {
      label: 'Success',
      value: 'success',
    },
    {
      label: 'Warning',
      value: 'warning',
    },
    {
      label: 'Error',
      value: 'error',
    },
    {
      label: 'Info',
      value: 'info',
    },
  ] as any;
  return (
    <>
      {
        variants.map((variant: any) => (
          <div key={variant.value} className="mb-4">
            <div className="mb-2 text-xl font-bold">{variant.label}</div>
            <table className="border-collapse border">
              <tr>
                <td className="py-2 px-4 border" />
                {
                  colors.map((color: any) => (
                    <td key={color.value} className="py-2 px-4 border">{color.label}</td>
                  ))
                }
              </tr>
              {
                sizes.map((size: any) => (
                  <tr key={size.value}>
                    <td className="py-2 px-4 border">{size.label}</td>
                    {
                      colors.map((color: any) => (
                        <td className="py-2 px-4 border" key={color.value}>
                          <Template
                            size={size.value}
                            variant={variant.value}
                            color={color.value}
                            className="mr-3"
                            label={color.label} />
                        </td>
                      ))
                    }
                  </tr>
                ))
              }
            </table>
          </div>
        ))
      }
    </>
  );
}

export const Default = Template.bind({});
Default.args = {};

