import { SettingsSvg } from "@/utils/svgs";

const SwitchButtons = () => {
  return (
    <div className="w-full flex border-b border-custom">
      <div className="relative w-1/2 h-[3.3rem] flex items-center justify-center hover:bg-btnhover cursor-pointer">
        <span className="text-skin-primary font-bold">For you</span>
        <div className="absolute bottom-0 bg-custom h-[4px] min-w-[3.7rem] rounded-sm"></div>
      </div>
      <div className="w-1/2 h-[3.3rem] flex items-center justify-center cursor-pointer hover:bg-btnhover">
        <span className="text-skin-secondary text-md">Following</span>
      </div>
      <div className="hidden px-4 sm:flex items-center justify-center">
        <SettingsSvg />
      </div>
    </div>
  );
};

export default SwitchButtons;
