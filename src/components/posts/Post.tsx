import { TrendDotsSvg, VerifiedSvg } from "@/utils/svgs";
import { LuDot } from "react-icons/lu";

const Post = () => {
  return (
    <div className="flex flex-col text-white pb-4 border-b border-r border-custom">
      <div className="flex items-start justify-between px-2 py-3">
        <div className="flex gap-2 xs:gap-4 w-full">
          <div className="h-[2.5rem] w-[3.2rem] xs:w-[2.5rem] border rounded-full"></div>
          <div className="flex flex-col items-start gap-1">
            <div className="flex flex-col min-[420px]:flex-row min-[420px]:gap-3 items-start">
              <div className="flex items-center gap-1">
              <span className="font-bold text-[15px]">Historic Vids</span>
              <VerifiedSvg />
              </div>
              <div className="flex items-center">
              <span className="text-skin-secondary text-[15px]">@historyinmemes</span>
              <LuDot className="mt-0.5" color="rgb(113, 118, 123)" />
              <span className="text-skin-secondary">15h</span>
              </div>
            </div>
            <span className="font-extralight text-[15px]">
              Mike Tyson: Muhammad Ali is the greatest
            </span>
          </div>
        </div>
        <TrendDotsSvg />
      </div>
      <div className="w-[85%] ml-[12%] rounded-2xl h-[32rem] border border-custom cursor-pointer"></div>
    </div>
  );
};

export default Post;
