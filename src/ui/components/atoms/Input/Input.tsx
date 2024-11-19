import { FC } from "react";
import { UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  className: string;
  type: string;
  name?: string,
  placeholder: string;
  autoComplete: string;
  register: ReturnType<UseFormRegister<{ "EmailAddress": string, "Password": string }>>;
}

export const Input: FC <InputProps> = ({ id, className, type, placeholder, autoComplete, register }) => {
  return (
    <input
      id={id}
      className={className}
      type={type}
      placeholder={placeholder}
      autoComplete={autoComplete}
      {...register}
    />
  );
}
