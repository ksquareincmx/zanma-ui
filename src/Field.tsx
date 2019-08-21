import styled from "styled-components";
import { Colors } from "./colors";
import { FontWeight } from "./typography";
import { MediaQuery } from "./queries";

export const Label = styled.label`
  color: ${Colors.BASE_GRAY};
  font-family: "Raleway";
  font-size: 0.75rem;
  line-height: 1.5;
  margin: 0;

  display: block;
  margin-bottom: 8px;
  font-weight: ${FontWeight.BOLD};

  @media all and (min-width: ${MediaQuery.MIN_DESKTOP_SIZE}px) {
    font-size: 0.875rem;
  }
`;

export const TextField = styled.input.attrs({ type: "text " })`
  border: 1.5px solid ${Colors.LIGHT_GRAY};
  border-radius: 4px;
  box-sizing: border-box;
  color: ${Colors.BASE_GRAY};
  display: block;
  height: 36px;
  font-family: "Raleway";
  font-size: 0.75rem;
  font-weight: ${FontWeight.REGULAR};
  padding: 0 12px;
  width: 100%;

  @media all and (min-width: ${MediaQuery.MIN_DESKTOP_SIZE}px) {
    font-size: 0.875rem;
  }
`;
