import { FC } from "react";

interface InputProps {
  id: string,
  className: string,
  type: string,
  name: string,
  placeholder: string,
  autoComplete: string
}

export const Input: FC <InputProps> = ({ id, className, type, name, placeholder, autoComplete }) => {
  return (
    <input
      id={id}
      className={className}
      type={type}
      name={name}
      placeholder={placeholder}
      autoComplete={autoComplete}
    />
  );
}
