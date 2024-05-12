import Image from "next/image";

type IconProps = React.ComponentPropsWithoutRef<typeof Image> & {
  src: string;
  alt: string;
};
/* Example use: <Icon className="mx-2" src={googleIcon.src} alt="Google icon" /> */
const Icon = ({ src, alt, className, ...rest }: IconProps) => {
  return <Image src={src} alt={alt} className={className||''} width={20} height={20} {...rest}/>;
};

export default Icon;
