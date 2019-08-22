import * as React from "react";
import styled from "styled-components";
import { MediaQuery } from "./queries";
import { Caption } from "./Caption";

const HeaderWrapper = styled.header`
  background-color: white;
  box-shadow: 0 0.125rem 0.75rem 0 rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

const HeaderContainer = styled.div`
  @media (min-width: ${MediaQuery.MIN_DESKTOP_SIZE}px) {
    margin: 0 auto;
    width: ${MediaQuery.MIN_DESKTOP_SIZE}px;
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

export const MainHeader = () => {
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
          <MainHeaderBrand>
            <div
              style={{
                backgroundColor: "#A3ABB0",
                height: "32px",
                width: "120px",
              }}
            />
          </MainHeaderBrand>
          <MainHeaderProfile>
            <div
              style={{
                backgroundColor: "#A3ABB0",
                width: "24px",
                height: "24px",
                borderRadius: "100%",
                marginRight: "16px",
              }}
            />

            <div
              style={{
                backgroundColor: "#A3ABB0",
                width: "24px",
                height: "24px",
                borderRadius: "100%",
                marginRight: "16px",
              }}
            />

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
        <div
          style={{
            height: "24px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Caption>Home</Caption>
          <Caption>Courses</Caption>
          <Caption>Learning Plans</Caption>
          <Caption>Programs</Caption>
          <Caption>Users</Caption>
          <Caption>Groups</Caption>
        </div>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
