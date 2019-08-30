import styled from "styled-components";
import { Colors } from "../styles/colors";

export const Touchable = styled.button`
  background-color: ${Colors.NONE};
  border: none;
  box-sizing: border-box;
  display: block;
  padding: 0;

  &:focus {
    outline: 2px solid ${Colors.PRIMARY_BLUE};
  }
`;
