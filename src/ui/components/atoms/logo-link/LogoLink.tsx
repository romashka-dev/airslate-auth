import { FC } from "react"

export interface LogoProps {
  id: string;
  selectorLink: string;
  href: string;
  selectorImage: string;
  path: string;
  width: number;
  height: number;
  altText: string;
}

export const LogoLink: FC<LogoProps> = ({
  id,
  selectorLink,
  href,
  selectorImage,
  path,
  width,
  height,
  altText
}) => {
  return (
    <a key={id} className={selectorLink} href={href} target="_blank" rel="noopener noreferrer">
      <img
        className={selectorImage}
        src={path}
        width={width}
        height={height}
        alt={altText}
      />
    </a>
  );
}
