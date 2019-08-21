import styled from "styled-components";
import { Colors } from "./colors";
import { FontWeight } from "./Typography";

/**
 * @component
 */
export const Text = styled.p`
  color: ${Colors.BASE_GRAY};
  font-family: "Raleway";
  font-size: 1rem;
  font-weight: ${FontWeight.REGULAR};
  line-height: 1.5;
  margin: 0;
`;
