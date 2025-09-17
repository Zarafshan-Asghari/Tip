import { useState } from 'react';
import { cn } from '../../../utils/common';

export default function Input({
  className,
  label,
  icon,
  type = 'text',
  placeholder = 0,
  value,
  onChange,
}) {
  const [inputValue, setInputValue] = useState('');
  const handleKeyDown = event => {
    if (event.key === 'Backspace' && value.length > 0) {
      setInputValue(inputValue.slice(0, -1));
    }
  };
  return (
    <div className="flex flex-col ">
      {label && (
        <label className="flex items-center justify-between mb-2 text-mild-slate">
          {label}
          {value === 0 && (
            <span className="text-red-600 text-xs mt-1 text-end"> Can't be zero</span>
          )}
        </label>
      )}
      <span
        className={cn(
          ' px-4 py-2 rounded-sm transition duration-300 bg-light-gray text-light-slate flex items-center justify-between ',
          value !== 0
            ? ' focus-within:outline-2 focus-within:outline-primary'
            : 'outline-2 outline-red-600'
        )}
      >
        {icon && <img src={icon} alt="icon" className="inline-block" />}
        <input
          value={value}
          onChange={onChange}
          type={type}
          className={cn(' w-full focus-within:outline-none text-end text-secondary', className)}
          placeholder={placeholder}
          onKeyDown={handleKeyDown}
        />
      </span>
    </div>
  );
}
