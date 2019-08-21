import React from "react";
import { render } from "react-dom";
import { Label, TextField } from "../../src/Field";

const Demo: React.FC = () => {
  const [lastName, updateLastName] = React.useState("");

  return (
    <div>
      <h2>Inputs</h2>

      <h3>Uncontrolled Input</h3>
      <Label htmlFor="username">User Name</Label>
      <TextField name="username" placeholder="Type your username" />

      <h3>Controlled Input</h3>
      <Label htmlFor="lastname">Last Name</Label>
      <TextField
        name="username"
        placeholder="Type your last name"
        value={lastName}
        onChange={event => updateLastName(event.target.value)}
      />
    </div>
  );
};

render(<Demo />, document.querySelector("#demo"));
