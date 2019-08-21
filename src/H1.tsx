import styled from "styled-components";
import { Colors } from "./colors";
import { FontWeight } from "./Typography";

/**
 * @component
 */
export const H1 = styled.h1`
  color: ${Colors.PRIMARY_BLUE};
  font-family: "Raleway";
  font-size: 1.375rem;
  font-weight: ${FontWeight.REGULAR};
  line-height: 2.25;
  margin: 0;
`;
