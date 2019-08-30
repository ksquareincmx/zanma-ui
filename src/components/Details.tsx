import styled from "styled-components";
import { Colors } from "../styles/colors";
import { FontWeight } from "../styles/typography";

/**
 * @component
 */
export const Details = styled.p`
  color: ${Colors.BASE_GRAY};
  font-family: "Raleway";
  font-size: 0.625rem;
  font-weight: ${FontWeight.MEDIUM};
  line-height: 0.875;
  margin: 0;
`;
