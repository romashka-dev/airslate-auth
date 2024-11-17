import { FC } from "react";
import { LogoProps, LogoLink } from "../../atoms/LogoLink/LogoLink";

export const LogoList: FC<{ logos: LogoProps[] }> = ({ logos }) => {
  return(
    <div className="logo-list">
      {logos.map((logo) => (
        <LogoLink key={logo.id} {...logo} />
      ))}
    </div>
  );
}
