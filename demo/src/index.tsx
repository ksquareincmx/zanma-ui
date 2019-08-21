import React, { Component } from "react";
import { render } from "react-dom";
import { createGlobalStyle } from "styled-components";
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Text,
  Caption,
  Details,
  Header,
  TabItem,
  ProgressBar,
} from "../../src";
import { TabContainer, TabLabel } from "../../src/Tabs";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700,900&display=swap');

  body, html {
    margin: 0;
  }
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

        <h2>Headers</h2>

        <h3>Stand Alone Header</h3>
        <Header
          title="Add Learning Plan"
          onClickBack={() => alert("You Clicked The Header")}
        />

        <h3>Stand Alone Header with Stepper</h3>
        <Header
          title="Add Learning Plan"
          onClickBack={() => alert("You Clicked The Header")}
        >
          <TabContainer>
            <div>
              <TabItem>
                <TabLabel>INFORMATION</TabLabel>
              </TabItem>
              <TabItem>
                <TabLabel isSelected>CONTENT</TabLabel>
              </TabItem>
              <TabItem>
                <TabLabel>CONFIGURATION</TabLabel>
              </TabItem>
            </div>
            <div>
              <ProgressBar progress="50" />
            </div>
          </TabContainer>
        </Header>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
