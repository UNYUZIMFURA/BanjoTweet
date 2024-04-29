import { LogoSvg, SettingsSvg } from "@/utils/svgs"

const Navbar = () => {
    return (
        <nav className="flex w-full items-center justify-between px-4 py-2 sm:hidden">
            <div className="h-8 w-8 rounded-full border object-cover"></div>
            <LogoSvg />
            <SettingsSvg />
        </nav>
    )
}

export default Navbar
