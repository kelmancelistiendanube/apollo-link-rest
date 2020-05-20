import * as React from "react";

export interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "children" | "style"
  > {}

const Input: React.FC<InputProps> = (props: InputProps) => {
  return (
    <input
      {...props}
      style={{ marginBottom: "10px", borderRadius: "20px", height: "50px" }}
    />
  );
};

export default Input;
