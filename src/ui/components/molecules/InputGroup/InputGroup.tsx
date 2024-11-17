import { ComponentProps } from "react";

import { Label } from "../../atoms/Label"
import { Input } from "../../atoms/Input"

interface Props {
  labelProps: ComponentProps<typeof Label>;
  inputProps: ComponentProps<typeof Input>;
}

export const InputGroup = ({ labelProps, inputProps }: Props) => {
  return (
    <>
      <Label {...labelProps}/>
      <Input {...inputProps}/>
    </>
  );
}