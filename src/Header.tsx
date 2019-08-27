import * as React from "react";
import styled from "styled-components";
import { BackIcon } from "./icons/BackIcon";
import { Touchable } from "./Touchable";
import { Colors } from "./colors";
import { H4 } from "./H4";
import { MediaQuery } from "./queries";

export const HeaderTitle = styled(H4)`
  color: ${Colors.BASE_GRAY};
  margin-left: 8px;
`;

export const HeaderWrapper = styled.header`
  background-color: white;
  box-shadow: 0 0.125rem 0.75rem 0 rgba(0, 0, 0, 0.1);
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

export interface IHeaderProps {
  /**
   * When the back arrow is clicked this method gets triggered
   */
  onClickBack: (e: React.MouseEvent<HTMLElement>) => void;
  /**
   * The header MUST have a title all the time
   */
  title: string;
}

export const Header: React.SFC<IHeaderProps> = ({
  onClickBack,
  title,
  children,
}) => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Touchable onClick={onClickBack}>
          <BackIcon size="14" />
        </Touchable>
        <HeaderTitle>{title}</HeaderTitle>
      </HeaderContainer>
      {children}
    </HeaderWrapper>
  );
};
