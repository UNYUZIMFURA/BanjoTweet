import { LogoSvg, SettingsSvg } from "@/svgs";

const Navbar = () => {
  return (
    <nav className="w-full py-2 flex items-center justify-between px-4 sm:hidden">
      <div className="rounded-full object-cover h-8 w-8 border"></div>
      <LogoSvg />
      <SettingsSvg />
    </nav>
  );
};

export default Navbar;
