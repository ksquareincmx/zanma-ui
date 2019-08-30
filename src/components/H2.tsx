import styled from "styled-components";
import { Colors } from "../styles/colors";
import { FontWeight } from "../styles/typography";

/**
 * @component
 */
export const H2 = styled.h2`
  color: ${Colors.PRIMARY_BLUE};
  font-family: "Raleway";
  font-size: 1.25rem;
  font-weight: ${FontWeight.MEDIUM};
  line-height: 2;
  margin: 0;
`;
