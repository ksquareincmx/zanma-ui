import React, { Component } from "react";
import {
  BackIcon,
  CertificatesIcon,
  SettingsIcon,
  Caption,
  Details,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Text,
} from "zanma-ui-chido";

export default class App extends Component {
  render() {
    return (
      <div>
        <BackIcon />
        <CertificatesIcon />
        <SettingsIcon />
        <Caption>Hello</Caption>
        <Details>Hello</Details>
        <H1>Hello</H1>
        <H2>Hello</H2>
        <H3>Hello</H3>
        <H4>Hello</H4>
        <H5>Hello</H5>
        <H6>Hello</H6>
        <Text>Hello</Text>
      </div>
    );
  }
}
