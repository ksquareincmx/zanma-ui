import React, { Component } from "react";
import { render } from "react-dom";
import { createGlobalStyle } from "styled-components";
import { H1, H2, H3, H4, H5, H6, Text, Caption, Details } from "../../src";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700,900&display=swap');
`;

class Demo extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <h1>zanma-ui Demo</h1>
        <h2>Typography</h2>
        <H1>Heading One</H1>
        <H2>Heading Two</H2>
        <H3>Heading Three</H3>
        <H4>Heading Four</H4>
        <H5>Heading Five</H5>
        <H6>Heading Six</H6>
        <Text>Base Text</Text>
        <Caption>Base Text</Caption>
        <Details>Base Text</Details>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
