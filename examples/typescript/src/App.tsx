import * as React from "react";
import Form from "./Form";
import Input from "./Input";

const App: React.FC<{}> = (props: {}) => {
  return (
    <Form>
      <Input />
      <Input />
      <Input />
      <Input />
      <span> hola cachona</span>
    </Form>
  );
};

export default App;
