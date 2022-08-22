import React, { forwardRef, LegacyRef } from "react";
import clsx from "clsx";
import Icon from "../Icon";

export interface SearchInputProps {
  className?: string;
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
  value?: string;
  placeholder?: string;
}

export const SearchInput = forwardRef( ({
  className,
  value,
  onChange,
  onBlur,
  placeholder,
}: SearchInputProps, ref: LegacyRef<HTMLInputElement>) => {
  return (
    <div className={clsx("relative block", className)}>
      <Icon icon="search" className="absolute top-1/2 transform -translate-y-2/4 left-4 mr-2 h-5 w-5 text-gray-600" />
      <input
        data-testid="search-input"
        ref={ref}
        name="search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="h-11 placeholder-gray-500 rounded-lg text-gray-700 focus:outline-none block w-full pl-12 border-gray-300 p-2 border"
      />
    </div>
  );
});
