import { FC } from "react";

interface LabelProps {
  selector: string,
  text: string,
  htmlFor?: string
}

export const Label: FC<LabelProps> = ({ selector, text, htmlFor }) => {
  return <label className={selector} htmlFor={htmlFor}>{text}</label>
}