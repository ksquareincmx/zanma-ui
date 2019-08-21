import styled from "styled-components";
import { Colors } from "./colors";
import { FontWeight } from "./Typography";

/**
 * @component
 */
export const H4 = styled.h4`
  color: ${Colors.PRIMARY_BLUE};
  font-family: "Raleway";
  font-size: 1rem;
  font-weight: ${FontWeight.SEMI_BOLD};
  line-height: 1.5;
  margin: 0;
`;
