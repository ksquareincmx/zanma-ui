import styled from "styled-components";
import { Colors } from "../styles/colors";
import { FontWeight } from "../styles/typography";

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
