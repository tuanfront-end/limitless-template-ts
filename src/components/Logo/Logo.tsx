import React from "react";
import LogoImg from "Logo.png";
import LogoLight from "LogoLight.png";
import { Link } from "react-router-dom";

const Logo: React.FC<{}> = ({}) => {
  return (
    <Link to="/" className="ttnc-logo block">
      <img
        id="ttnc-logo-img"
        className="block dark:hidden"
        src={LogoImg}
        alt="Logo"
      />
      <img
        id="ttnc-logo-img-light"
        className="hidden dark:block"
        src={LogoLight}
        alt="Logo Light"
      />
    </Link>
  );
};

export default Logo;
