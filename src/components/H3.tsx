import styled from "styled-components";
import { Colors } from "../styles/colors";
import { FontWeight } from "../styles/typography";

/**
 * @component
 */
export const H3 = styled.h3`
  color: ${Colors.PRIMARY_BLUE};
  font-family: "Raleway";
  font-size: 1.125rem;
  font-weight: ${FontWeight.SEMI_BOLD};
  line-height: 1.75;
  margin: 0;
`;
