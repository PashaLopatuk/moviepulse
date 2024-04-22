import LogoSVG from '@/../public/assets/logo.svg'
import Image from "next/image";
import {FC, HTMLAttributes} from "react";


const Logo: FC<HTMLAttributes<HTMLImageElement>> = (props) => {
  return (
    <Image
      src={LogoSVG.src}
      alt={'letter M'}
      width={200}
      height={200}
      {...props}
    />
  )
}

export default Logo