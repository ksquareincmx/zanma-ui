import * as React from "react";
import styled from "styled-components";
import { BackIcon } from "./icons/BackIcon";
import { Touchable } from "./Touchable";
import { Colors } from "./colors";
import { H4 } from "./typography";
import { MediaQuery } from "./queries";

export const HeaderTitle = styled(H4)`
  color: ${Colors.BASE_GRAY};
`;

export interface IHeaderProps {
  onClickBack: (e: React.MouseEvent<HTMLElement>) => void;
  title: string;
}

export const HeaderWrapper = styled.header`
  background-color: white;
  box-shadow: 1px 1px 5px gray;
`;

export const HeaderContainer = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 42px;
  padding: 0 12px;
  transition: padding 0.2s ease-in, height 0.2s ease-in;

  @media (min-width: ${MediaQuery.MIN_TABLET_SIZE}px) {
    height: 52px;
    padding: 0 20px;
  }

  @media (min-width: ${MediaQuery.MIN_DESKTOP_SIZE}px) {
    margin: 0 auto;
    width: 1024px;
  }
`;

export const Header: React.SFC<IHeaderProps> = ({
  onClickBack,
  title,
  children,
}) => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Touchable onClick={onClickBack}>
          <BackIcon size="22" />
        </Touchable>
        <HeaderTitle>{title}</HeaderTitle>
      </HeaderContainer>
      {children}
    </HeaderWrapper>
  );
};
