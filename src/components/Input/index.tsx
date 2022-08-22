import React, { ChangeEvent, useEffect, useRef } from 'react';

import clsx from 'clsx';

export interface InputProps {
  type?: string;
  label?: string;
  className?: string;
  name?: string;
  onChange?: (e: ChangeEvent) => void;
  onFocus?: (e: any) => void;
  value?: string;
  helperText?: any;
  placeholder?: string;
  tabIndex?: number;
  autoFocus?: boolean;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  label = '',
  className = '',
  name,
  onChange,
  onFocus,
  value,
  helperText,
  placeholder,
  autoFocus,
}) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus && ref.current) {
      ref.current.focus();
    }
  }, [autoFocus]);

  return (
    <div className={`w-full text-black-200 ${className}`}>
      {label && (
        <label className="block mb-2 text-sm" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        className={clsx(
          'h-10 text-gray-700 focus:ring-indigo-900 focus:border-0 focus:ring-2 focus:outline-none rounded-md px-4 w-full border border-gray-300 shadow-input text-sm',
          helperText && '!text-red-500 !border-red-500 focus:ring-red-500',
        )}
        onFocus={onFocus}
        onChange={onChange}
        autoComplete="off"
      />
      {!!helperText && (
      <div className="text-red-500 text-xs mt-2">
        *
        {helperText}
      </div>
      )}
    </div>
  );
};

export default Input;
