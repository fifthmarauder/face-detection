import React from "react";

const UploadIcon = ({width,height,color}:{width:string,height:string,color:string}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m8 8 4-4 4 4"
        stroke={color}
        strokeWidth="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 4v12M19 17v.6c0 1.33-1.07 2.4-2.4 2.4H7.4C6.07 20 5 18.93 5 17.6V17"
        stroke={color}
        strokeWidth="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default UploadIcon;
