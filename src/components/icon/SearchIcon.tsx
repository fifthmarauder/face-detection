import React from "react";

const SearchIcon = ({
  width = "32px",
  height = "32px",
  color = "#000000",
}: {
  width?: string;
  height?: string;
  color?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>ionicons-v5-f</title>
      <path
        d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z"
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="32px"
      />
      <line
        x1="338.29"
        y1="338.29"
        x2="448"
        y2="448"
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32px"
      />
    </svg>
  );
};

export default SearchIcon;
