import styled from "styled-components";
import { Colors } from "../styles/colors";

export interface IProgressBarProps {
  progress: string | number;
}

export const ProgressBar = styled.div<IProgressBarProps>`
  background-color: ${Colors.PRIMARY_BLUE};
  height: 3px;
  transition: all 0.2s ease-in;
  width: ${(props: IProgressBarProps) => `${props.progress}%`};
`;
