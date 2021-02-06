import React from "react";
export interface InputProps {
  containerClassName?: string;
  placeholder?: string;
  label?: string;
  name: string;
}
const Input: React.FC<InputProps> = ({
  containerClassName = "",
  name,
  placeholder = "",
  label = "",
}) => {
  return (
    <div className={containerClassName}>
      {label && (
        <label
          htmlFor={name}
          className="block text-paragraph-small text-black dark:text-white mb-2 ml-4"
        >
          {label}
        </label>
      )}
      <div className="flex shadow-sm">
        <input
          type="text"
          name={name}
          className="focus:ring-action-primary focus:border-primary flex-1 block w-full sm:text-sm border-action-primary"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Input;
