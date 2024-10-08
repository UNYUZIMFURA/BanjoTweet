import Image from "next/image"
import { v4 } from "uuid"
import { LogoSvg, SettingsSvg } from "@/utils/svgs"

const Navbar = () => {
    return (
        <nav className="flex w-full items-center justify-between px-4 py-2 sm:hidden">
            <div className="relative h-8 w-8 cursor-pointer overflow-hidden rounded-full object-cover">
                <Image
                    src={`https://picsum.photos/600/600?random=${v4()}`}
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
