import styled from "styled-components";
import { Colors } from "./colors";

export enum FontWeight {
  LIGHT = 300,
  REGULAR = 400,
  MEDIUM = 500,
  SEMI_BOLD = 600,
  BOLD = 700,
  BOLDER = 800,
}

export const H1 = styled.h1`
  color: ${Colors.PRIMARY_BLUE};
  font-family: "Raleway";
  font-size: 1.375rem;
  font-weight: ${FontWeight.REGULAR};
  line-height: 2.25;
  margin: 0;
`;

export const H2 = styled.h2`
  color: ${Colors.PRIMARY_BLUE};
  font-family: "Raleway";
  font-size: 1.25rem;
  font-weight: ${FontWeight.MEDIUM};
  line-height: 2;
  margin: 0;
`;

export const H3 = styled.h3`
  color: ${Colors.PRIMARY_BLUE};
  font-family: "Raleway";
  font-size: 1.125rem;
  font-weight: ${FontWeight.SEMI_BOLD};
  line-height: 1.75;
  margin: 0;
`;

export const H4 = styled.h4`
  color: ${Colors.PRIMARY_BLUE};
  font-family: "Raleway";
  font-size: 1rem;
  font-weight: ${FontWeight.SEMI_BOLD};
  line-height: 1.5;
  margin: 0;
`;

export const H5 = styled.h5`
  color: ${Colors.PRIMARY_BLUE};
  font-family: "Raleway";
  font-size: 0.875rem;
  font-weight: ${FontWeight.MEDIUM};
  line-height: 1.5;
  margin: 0;
`;

export const H6 = styled.h6`
  color: ${Colors.PRIMARY_BLUE};
  font-family: "Raleway";
  font-size: 0.75rem;
  font-weight: ${FontWeight.SEMI_BOLD};
  line-height: 1.5;
  margin: 0;
`;

export const Text = styled.p`
  color: ${Colors.BASE_GRAY};
  font-family: "Raleway";
  font-size: 1rem;
  font-weight: ${FontWeight.REGULAR};
  line-height: 1.5;
  margin: 0;
`;

export const Caption = styled.p`
  color: ${Colors.BASE_GRAY};
  font-family: "Raleway";
  font-size: 0.75rem;
  font-weight: ${FontWeight.REGULAR};
  line-height: 1.25;
  margin: 0;
`;

export const Details = styled.p`
  color: ${Colors.BASE_GRAY};
  font-family: "Raleway";
  font-size: 0.625rem;
  font-weight: ${FontWeight.MEDIUM};
  line-height: 0.875;
  margin: 0;
`;
