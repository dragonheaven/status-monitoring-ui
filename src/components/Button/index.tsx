import React from "react";
import Icon from "../Icon";

type ColorType = "primary" | "secondary" | "success" | "warning" | "error" | "info";
type VariantType = "text" | "outlined" | "contained";
type SizeType = "sm" | "md" | "lg";

export interface ButtonProps {
  label?: string;
  size?: SizeType;
  color?: ColorType;
  htmlType?: "submit" | "reset";
  variant?: VariantType;
  className?: string;
  onClick?: () => void;
  loading?: boolean;
  testId?: string;
}

const Button: React.FC<ButtonProps> = ({
  color = "primary",
  label = "Button",
  size = "md",
  htmlType = "submit",
  variant = "contained",
  className,
  onClick,
  loading,
  testId,
}) => {
  const colorClasses = {
    primary: {
      contained: 'bg-primary text-white hover:ring-2 hover:ring-orange-600',
      outlined: 'border border-primary text-primary hover:ring-2 hover:ring-orange-600',
      text: 'text-primary hover:ring-2 hover:ring-orange-600',
    },
    secondary: {
      contained: 'bg-gray-600 text-white hover:ring-gray-600',
      outlined: 'border border-gray-600 text-gray-600 hover:ring-gray-600',
      text: 'text-gray-600 hover:ring-gray-600',
    },
    success: {
      contained: 'bg-green-500 text-white hover:ring-green-500',
      outlined: 'border border-green-500 text-green-500 hover:ring-green-500',
      text: 'text-green-500 hover:ring-green-500',
    },
    warning: {
      contained: 'bg-yellow-500 text-white hover:ring-yellow-500',
      outlined: 'border border-yellow-500 text-yellow-500 hover:ring-yellow-500',
      text: 'text-yellow-500 hover:ring-yellow-500',
    },
    error: {
      contained: 'bg-red-500 text-white hover:ring-red-500',
      outlined: 'border border-red-500 text-red-500 hover:ring-red-500',
      text: 'text-red-500 hover:ring-red-500',
    },
    info: {
      contained: 'bg-blue-600 text-white hover:ring-blue-600',
      outlined: 'border border-blue-600 text-blue-600 hover:ring-blue-600',
      text: 'text-blue-600 hover:ring-blue-600',
    }
  };
  const sizeClasses = {
    sm: "px-4 py-1 text-sm",
    md: "px-8 py-2",
    lg: "px-8 py-2 text-xl"
  };

  return (
    <button
      type={htmlType}
      className={`rounded-md focus:outline-none hover:ring-2 hover:ring-opacity-50 ${sizeClasses[size]} ${colorClasses[color][variant]} ${className}`}
      onClick={onClick}
      data-testid={testId}
    >
      {loading ? <Icon icon="spinner" spin /> : label}
    </button>
  )
};

export default Button;
