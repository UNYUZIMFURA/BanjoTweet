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
    <div className="hidden px-4 gap-4 py-6 sm:flex items-center border-b border-custom">
      <div className="flex items-start gap-4">
        <div className="rounded-full object-cover h-[40px] w-[40px] border"></div>
        <div className="flex flex-col gap-[4rem]">
          <span className="text-skin-secondary text-[20px]">
            What is happening?!
          </span>
          <div className="flex gap-4">
            <GallerySvg />
            <EmojisSvg />
            <GifSvg />
            <PollSvg />
            <ScheduleSvg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
