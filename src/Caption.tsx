import styled from "styled-components";
import { Colors } from "./colors";
import { FontWeight } from "./Typography";

/**
 * @component
 */
export const Caption = styled.p`
  color: ${Colors.BASE_GRAY};
  font-family: "Raleway";
  font-size: 0.75rem;
  font-weight: ${FontWeight.REGULAR};
  line-height: 1.25;
  margin: 0;
`;
