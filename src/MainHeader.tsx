import * as React from "react";
import styled from "styled-components";
import { MediaQuery } from "./queries";
import { Touchable } from "./Touchable";
import { SettingsIcon } from "./icons/SettingsIcon";
import { CertificatesIcon } from "./icons/CertificatesIcon";
import { Caption } from "./Caption";

const HeaderWrapper = styled.header`
  background-color: white;
  box-shadow: 0 0.125rem 0.75rem 0 rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

const HeaderContainer = styled.div`
  @media (min-width: ${MediaQuery.MIN_DESKTOP_SIZE}px) {
    margin: 0 auto;
    max-width: ${MediaQuery.MIN_DESKTOP_SIZE}px;
  }
`;

const MainHeaderNav = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 33%;
`;

const MainHeaderBrand = styled.div`
  display: flex;
  justify-content: center;
  width: 33%;
`;

const MainHeaderProfile = styled.div`
  display: flex;
  height: 24px;
  justify-content: flex-end;
  width: 33%;
`;

export const MainHeaderLinks = styled.nav`
  align-items: center;
  height: 24px;
  display: flex;
  justify-content: space-around;
`;

export interface ILink {
  id: number | string;
  text: string;
}

export interface IMainHeaderProps {
  /**
   * List of optional bottom links
   */
  links?: Array<ILink>;
  /**
   * Link click handler
   */
  onClickLink?: (l: ILink) => (e: React.MouseEvent) => void;
  logo?: React.ReactElement | React.FC | React.SFC;
}

export const noop = () => {};

export const MainHeader: React.SFC<IMainHeaderProps> = ({
  logo = null,
  links = [],
  onClickLink = noop,
}) => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <div
          style={{
            boxSizing: "border-box",
            padding: "16px 16px 0 16px",
            height: "56px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <MainHeaderNav />
          <MainHeaderBrand>{logo}</MainHeaderBrand>
          <MainHeaderProfile>
            <div style={{ marginRight: "16px" }}>
              <Touchable>
                <CertificatesIcon size="24" alt="Certificates" />
              </Touchable>
            </div>

            <div style={{ marginRight: "16px" }}>
              <Touchable>
                <SettingsIcon size="24" alt="Settings" />
              </Touchable>
            </div>

            <div
              style={{
                backgroundColor: "#A3ABB0",
                width: "24px",
                height: "24px",
                borderRadius: "100%",
              }}
            />
          </MainHeaderProfile>
        </div>
        <MainHeaderLinks>
          {links.map(link => (
            <Touchable key={link.id} onClick={onClickLink(link)}>
              <Caption>{link.text}</Caption>
            </Touchable>
          ))}
        </MainHeaderLinks>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
