import React from "react";

import { NavLink } from "react-router-dom";

interface CustomButtonProps {
  href?: string;
  download?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => void;
}

const HaryotButton: React.FC<CustomButtonProps> = ({
  href,
  download,
  className,
  type,
  disabled,
  children,
  onClick,
}) => {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    if (onClick) {
      onClick(e);
    }

    if (href && download) {
      e.preventDefault();
      const link = document.createElement("a");
      link.href = href;
      link.download = download;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const commonClasses = ` ${className} btn-hover1 inline-block overflow-hidden rounded-xl py-4 px-4 border transition-all duration-300 ease-linear text-center `;

  if (type || disabled) {
    return (
      <button
        type={type}
        disabled={disabled}
        className={`${commonClasses} ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handleClick}
      >
        {children}
      </button>
    );
  }

  if (!href) {
    return (
      <button className={commonClasses} onClick={handleClick}>
        {children}
      </button>
    );
  }

  return (
    <NavLink to={href} className={commonClasses} onClick={handleClick}>
      {children}
    </NavLink>
  );
};

export default HaryotButton;
