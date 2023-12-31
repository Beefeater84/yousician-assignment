import React, { SVGProps } from "react";

interface SearchIconProps extends SVGProps<SVGSVGElement> {
  color?: string;
}

const SearchIcon: React.FC<SearchIconProps> = ({
  color = "currentColor",
  ...props
}) => {
  return (
    <svg
      // fill={color}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 0h16v16H0z" fill="none" />
      <path
        id="a"
        d="M11.391 12.452a7 7 0 1 1 1.06-1.06l3.33 3.328a.75.75 0 0 1-1.061 1.06l-3.329-3.328zM7 12.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"
      />
    </svg>
  );
};

export default SearchIcon;
