import React from "react";
import { render } from "react-dom";
// import styled from "styled-components";
import { Label, TextField } from "../../src/Field";
import { SelectField } from "../../src/SelectField";

const Demo: React.FC = () => {
  const [lastName, updateLastName] = React.useState("");
  const [value, updateValue] = React.useState("Option 1");

  const handleChange = (newValue: string) => {
    updateValue(newValue);
  };

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

      <h3>Selects</h3>
      <SelectField value={value} onChange={handleChange} />
    </div>
  );
};

render(<Demo />, document.querySelector("#demo"));
