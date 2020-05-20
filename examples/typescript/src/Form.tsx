import * as React from "react";
import Input, { InputProps } from "./Input";

interface FormProps<T> extends React.HTMLAttributes<T> {
  children: React.ReactElement<Input, InputProps>;
}

const Form: React.FC<FormProps<InputProps>> = ({
  children
}: FormProps<InputProps>) => {
  return (
    <form
      key="formulario-numbus"
      style={{ display: "flex", flexDirection: "column", padding: "0 20px" }}
    >
      {children}
    </form>
  );
};

export default Form;
