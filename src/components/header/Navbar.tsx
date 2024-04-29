import Image from "next/image"
import { LogoSvg, SettingsSvg } from "@/utils/svgs"

const Navbar = () => {
    return (
        <nav className="flex w-full items-center justify-between px-4 py-2 sm:hidden">
            <div className="cursor-pointer relative overflow-hidden h-8 w-8 rounded-full object-cover">
                <Image
                    src={`https://source.unsplash.com/800x800/?person`}
                    fill={true}
                    className="object-cover"
                    alt=""
                />
            </div>
            <LogoSvg />
            <SettingsSvg />
        </nav>
    )
}

export default Navbar
