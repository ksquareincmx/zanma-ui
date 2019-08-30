import styled from "styled-components";
import { Details } from "./Details";
import { FontWeight } from "../styles/typography";
import { Colors } from "../styles/colors";

export interface ITabLabelProps {
  isSelected?: boolean;
}

export const tabLabelColor = (isSelected: boolean = false) => {
  if (isSelected) {
    return Colors.PRIMARY_BLUE;
  }

  return Colors.BASE_GRAY;
};

export const tabLabelFontWeight = (isSelected: boolean = false) => {
  if (isSelected) {
    return FontWeight.BOLD;
  }

  return FontWeight.REGULAR;
};

export const TabItem = styled.div`
  text-align: center;
  display: inline-block;
  vertical-align: top;
  width: 33%;
`;

export const TabLabel = styled(Details)`
  color: ${(props: ITabLabelProps) => tabLabelColor(props.isSelected)};
  font-weight: ${(props: ITabLabelProps) =>
    tabLabelFontWeight(props.isSelected)};
`;

export const TabContainer = styled.div`
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
