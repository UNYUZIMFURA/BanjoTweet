import { SettingsSvg } from "@/utils/svgs"

const SwitchButtons = () => {
    return (
        <div className="flex w-full border-b border-custom">
            <div className="relative flex h-[3.3rem] w-1/2 cursor-pointer items-center justify-center hover:bg-btnhover">
                <span className="font-bold text-skin-primary">For you</span>
                <div className="absolute bottom-0 h-[4px] min-w-[3.7rem] rounded-sm bg-custom"></div>
            </div>
            <div className="flex h-[3.3rem] w-1/2 cursor-pointer items-center justify-center hover:bg-btnhover">
                <span className="text-md text-skin-secondary">Following</span>
            </div>
            <div className="hidden items-center justify-center px-4 sm:flex">
                <SettingsSvg />
            </div>
        </div>
    )
}

export default SwitchButtons
