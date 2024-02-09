import React from "react";
import {
  GallerySvg,
  EmojisSvg,
  GifSvg,
  PollSvg,
  ScheduleSvg,
} from "@/svgs/index";

const Upload = () => {
  return (
    <div className="p-4 gap-4 h-[8rem] borde flex items-center ">
      <div className="rounded-full object-cover h-[40px] w-[40px] border"></div>
      <div className="flex flex-col">
        <span className="text-skin-secondary">What is happening?!</span>
        <div className="flex">
          <GallerySvg />
          <EmojisSvg />
          <GifSvg />
          <PollSvg />
          <ScheduleSvg />
        </div>
      </div>
    </div>
  );
};

export default Upload;
