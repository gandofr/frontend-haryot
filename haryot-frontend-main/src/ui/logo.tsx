import logo from "../assets/images/logo/logo-haryot.png";

export function LogoHaryot({ className }: { className?: string }) {
  return <img src={logo} alt="Logo" className={` ${className ?? ""}`} />;
}
