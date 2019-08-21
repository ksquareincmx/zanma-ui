import styled from "styled-components";
import { Colors } from "./colors";

export const Touchable = styled.button`
  background-color: ${Colors.NONE};
  border: none;
  display: block;
  margin-right: 8px;
  padding: 0;

  &:focus {
    outline: 2px solid ${Colors.PRIMARY_BLUE};
  }
`;
