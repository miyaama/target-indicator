import { FC } from "react";
import { IconProps } from "./icon.types";

export const InfoIcon: FC<IconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#5A8AA7"
      viewBox="0 0 4000 4000"
      width="156px"
      height="156px"
      {...props}
    >
      <path d="M2000,640c-749.926,0-1360,610.074-1360,1360s610.074,1360,1360,1360s1360-610.074,1360-1360S2749.926,640,2000,640z M2136,2831.074c0,75.105-60.895,136-136,136s-136-60.895-136-136v-997.289c0-75.105,60.895-136,136-136s136,60.895,136,136 V2831.074z M2000,1456c-75.105,0-136-60.895-136-136s60.895-136,136-136s136,60.895,136,136S2075.105,1456,2000,1456z" />
    </svg>
  );
};
