import type {FC} from "react";
import type {SVGIconProps} from "@/shared/assets/icons/types";


const Logo: FC<SVGIconProps> = (props) => {
  return (
    <svg
      id="sw-js-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={'bg-foreground'}
      {...props}
    >
      <defs>
        <linearGradient
          id="sw-gradient" x1="0" x2="1" y1="1" y2="0"
        >
          <stop id="stop1" offset="0%"></stop>
          <stop id="stop2" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path
        fill="none"
        d="M17.2,9.1C10.7,21.2,-14.1,21.8,-20,10.1C-25.9,-1.7,-13,-25.8,-0.6,-26.1C11.8,-26.4,23.7,-2.9,17.2,9.1Z"
        width="100%" height="100%" transform="translate(50 50)"
        style={{
          transition: 'all 0.3s ease 0s',
        }}
        stroke="hsl(var(--foreground))"
      ></path>
    </svg>
  )
}

export default Logo