import * as React from "react";
import styled from "styled-components";
import { H1, H2, H3, H4, H5, H6, Text, Details, Caption } from "./typography";
import { BackIcon } from "./icons/BackIcon";
import { Colors } from "./colors";

export { H1, H2, H3, H4, H5, H6, Text, Details, Caption };

export const HeaderTitle = styled(H4)`
  color: ${Colors.BASE_GRAY};
`;

export interface IHeaderProps {
  onClickBack: (e: React.MouseEvent<HTMLElement>) => void;
  title: string;
}

const Touchable = styled.button`
  background-color: ${Colors.NONE};
  border: none;
  margin-right: 8px;
  padding: 0;

  &:focus {
    outline: 2px ridge ${Colors.PRIMARY_BLUE};
  }
`;

export const Header = ({ onClickBack, title }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        boxShadow: "1px 1px 5px gray",
      }}
    >
      <div
        style={{
          alignItems: "center",
          boxSizing: "border-box",
          display: "flex",
          height: "48px",
          padding: "0 20px",
        }}
      >
        <Touchable onClick={onClickBack}>
          <BackIcon size="22" />
        </Touchable>
        <HeaderTitle>{title}</HeaderTitle>
      </div>
    </div>
  );
};
