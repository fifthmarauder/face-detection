import * as React from "react";
const Logo = ({width ,height ,color}:{width:string,height:string,color:string}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Face Detection Logo"

  >
    <defs>
      {/* <style>
        {
               .ink { fill: #1A2B49; } 
            .stroke { fill: none; stroke: #1A2B49; stroke-width: 10; stroke-linecap: round; stroke-linejoin: round; }
        }
      </style> */}
    </defs>
    <path
        fill= "none" stroke= {color} strokeWidth="10" strokeLinecap= "round" strokeLinejoin= "round"
      d="     M 28 76 v -24 a 12 12 0 0 1 12 -12 h 24     M 228 76 v -24 a 12 12 0 0 0 -12 -12 h -24     M 228 180 v 24 a 12 12 0 0 1 -12 12 h -24     M 28 180 v 24 a 12 12 0 0 0 12 12 h 24"
    />
    <path

      fill= {color}
      d="     M 128 58     a 34 34 0 1 1 0 68     a 34 34 0 1 1 0 -68     m -58 98     c 16 -14 40 -22 58 -22     s 42 8 58 22     c 10 9 16 21 16 34     h -148     c 0 -13 6 -25 16 -34 z"
    />
  </svg>
);
export default Logo;
