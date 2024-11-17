import { FC } from "react";

interface InputProps {
  className: string,
  type: string,
  name: string,
  placeholder: string,
  autoComplete: string
}

export const Input: FC <InputProps> =({ className, type, name, placeholder, autoComplete }) => {
  return (
    <input
      className={className}
      type={type}
      name={name}
      placeholder={placeholder}
      autoComplete={autoComplete}
    />
  );
}
