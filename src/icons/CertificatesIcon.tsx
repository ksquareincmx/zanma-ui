import * as React from "react";

export interface ICertificatesIconProps {
  size?: string;
  alt?: string;
}

export const CertificatesIcon: React.SFC<ICertificatesIconProps> = ({
  size = "16",
  alt = "Certificates",
} = {}) => (
  <svg
    width={`${size}px`}
    height={`${size}px`}
    viewBox="0 0 14 22"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <title>{alt}</title>
    <defs>
      <path
        d="M6.75,0 C10.4717475,0 13.5,3.095202 13.5,6.9 C13.5,8.752581 12.76101,10.519602 11.475,11.809005 L11.475,11.809005 L11.475,20.01 C11.475,20.249223 11.3537025,20.471265 11.154645,20.596914 C11.04651,20.665293 10.923255,20.7 10.8,20.7 C10.6965225,20.7 10.5936525,20.675712 10.4980725,20.627274 L10.4980725,20.627274 L6.75,18.711558 L3.00186,20.627205 C2.7929475,20.733672 2.544075,20.722563 2.3450175,20.596914 C2.1462975,20.471265 2.025,20.249223 2.025,20.01 L2.025,20.01 L2.025,11.809281 C0.7394625,10.521465 0,8.753547 0,6.9 C0,3.095202 3.027915,0 6.75,0 Z M10.125,12.873813 C10.094625,12.891822 10.06128,12.903621 10.030635,12.921078 C9.8171325,13.04307 9.598095,13.152918 9.3733875,13.250139 C9.3534075,13.258557 9.3341025,13.268286 9.314055,13.276566 C8.507835,13.616115 7.63938,13.8 6.75,13.8 C5.86116,13.8 4.9934475,13.616391 4.18743,13.277049 C4.1657625,13.268148 4.144905,13.25766 4.123305,13.248483 C3.901365,13.152228 3.6848925,13.043622 3.47382,12.923286 L3.47382,12.923286 L3.375,12.873813 L3.375,18.893442 L6.4480725,17.322795 C6.543045,17.274288 6.6465225,17.25 6.75,17.25 C6.8534775,17.25 6.956955,17.274288 7.0519275,17.322726 L7.0519275,17.322726 L10.125,18.893442 Z M6.75,1.38 C3.7725075,1.38 1.35,3.856341 1.35,6.9 C1.35,8.468646 2.0058975,9.966222 3.1492125,11.007984 C4.016385,11.805417 5.103405,12.288417 6.253605,12.396678 C6.4179675,12.412134 6.583545,12.42 6.75,12.42 C8.0815725,12.42 9.359685,11.919336 10.3484925,11.009985 C11.4941025,9.966222 12.15,8.468646 12.15,6.9 C12.15,3.856341 9.7274925,1.38 6.75,1.38 Z M6.75,2.76 C8.983305,2.76 10.8,4.617066 10.8,6.9 C10.8,8.077485 10.3075875,9.20115 9.44865,9.983403 C8.7090525,10.664019 7.749945,11.04 6.75,11.04 C5.750325,11.04 4.7909475,10.664019 4.04838,9.981402 C3.1924125,9.20115 2.7,8.077209 2.7,6.9 C2.7,4.617066 4.516695,2.76 6.75,2.76 Z M6.75,4.14 C5.26122,4.14 4.05,5.378136 4.05,6.9 C4.05,7.683978 4.377645,8.432628 4.9491675,8.953164 C5.94189,9.866172 7.56081,9.863826 8.5482675,8.95551 C9.122355,8.432628 9.45,7.684323 9.45,6.9 C9.45,5.378136 8.2391175,4.14 6.75,4.14 Z"
        id="certificate-icon-path"
      ></path>
    </defs>
    <g
      id="10.-Dashboard"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g id="10.1-copy-5" transform="translate(-912.000000, -18.000000)">
        <g id="Group-4" transform="translate(-1.000000, 0.000000)">
          <g
            id="0.-Fund-/-Icons-/-Settings-Copy"
            transform="translate(907.000000, 16.000000)"
          >
            <g id="Color" transform="translate(6.300000, 2.700000)">
              <mask id="certificates-icon-mask" fill="white">
                <use xlinkHref="#certificate-icon-path"></use>
              </mask>
              <use
                id="Mask"
                fill="#000000"
                fill-rule="nonzero"
                xlinkHref="#certificate-icon-path"
              ></use>
              <g
                id="0.-Fund-/-Colors-/-Brand-Colors-/-Brand-Secundary"
                mask="url(#certificates-icon-mask)"
                fill="#3D3D3D"
              >
                <g transform="translate(-6.300000, -2.700000)" id="Color">
                  <rect
                    x="0"
                    y="0"
                    width="24.9683544"
                    height="25.0540541"
                  ></rect>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);
