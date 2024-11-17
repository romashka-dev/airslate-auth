import { FC } from "react"

interface ButtonProps {
  title: string;
  selector: string;
  type?: 'button' | 'submit' | 'reset'; 
  ariaLabel: string;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ onClick, title, selector, type = 'button', ariaLabel }) => {
  return (
    <button
      onClick={onClick}
      className={selector}
      type={type}
      aria-label={ariaLabel}
    >
      {title}
    </button>
  );
}
