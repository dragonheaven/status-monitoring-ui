import React from "react";

export type BadgeTypeProps = "primary" | "secondary";

export interface BadgeProps {
  type?: BadgeTypeProps;
  label: string;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  type = "primary",
  label ,
  className,
}) => {
  const typeClasses = type === 'primary' ? 'bg-green-500 bg-opacity-70' : 'bg-red-500 bg-opacity-15';

  return (
    <div
      className={`
        rounded-full inline-block text-black-600 min-w-max px-8 text-center
        text-sm text-white py-1.5
        ${typeClasses} ${className}
      `}
    >
      {label}
    </div>
  );
};

export default Badge;
