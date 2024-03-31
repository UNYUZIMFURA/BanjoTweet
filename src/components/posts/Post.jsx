import { TrendDotsSvg, VerifiedSvg } from "@/utils/svgs";
import { LuDot } from "react-icons/lu";

const Post = () => {
  return (
    <div className="flex flex-col text-white pb-4 border-b border-r border-custom">
      <div className="flex justify-between px-4 py-3">
        <div className="flex gap-4">
          <div className="h-[2.5rem] w-[2.5rem] border rounded-full"></div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-1">
              <span className="font-bold">Historic Vids</span>
              <VerifiedSvg />
              <span className="text-skin-secondary">@historyinmemes</span>
              <LuDot className="mt-0.5" color="rgb(113, 118, 123)" />
              <span className="text-skin-secondary">15h</span>
            </div>
            <span className="font-extralight">
              Mike Tyson: Muhammad Ali is the greatest
            </span>
          </div>
        </div>
        <TrendDotsSvg />
      </div>
      <div className="w-[85%] ml-[12%] rounded-2xl h-[32rem] border border-custom"></div>
    </div>
  );
};

export default Post;
