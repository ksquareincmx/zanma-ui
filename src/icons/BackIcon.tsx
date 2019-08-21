import * as React from "react";

export interface IBackIconProps {
  size?: string;
}

export const BackIcon: React.SFC<IBackIconProps> = ({ size = "16" } = {}) => (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 14 24"
    width={`${size}px`}
  >
    <title>Back</title>
    <g>
      <g transform="translate(0.000000, 1.000000)">
        <g
          id="Mask"
          transform="translate(7.000000, 11.500000) scale(-1, 1) translate(-7.000000, -11.500000) "
        >
          <path
            fill="#0343E4"
            d="M13.2,12.5L2,23l-2-2l10.2-9.5L0,2l2-2l11.1,10.4c0.4,0.3,0.9,0.7,0.9,1.1S13.6,12.2,13.2,12.5z"
          />
        </g>
      </g>
    </g>
  </svg>
);
