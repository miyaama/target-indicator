import { FC } from "react";

import { IconProps } from "./icon.types";

export const ArrowIcon: FC<IconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="26"
      viewBox="0 0 42 26"
      fill="none"
      {...props}
    >
      <path d="M21 0L41.7846 25.5H0.215391L21 0Z" fill="#525151" />
    </svg>
  );
};
