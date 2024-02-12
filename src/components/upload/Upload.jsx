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
    <div className="text-white hidden gap-4 pt-3 pb-1 sm:flex flex-col items-center">
      <div className="flex justify-around w-full bg-slat-200">
        <div className="rounded-full object-cover h-[40px] w-[40px] border"></div>
        <textarea
          className="resize-none h-[168px] w-[80%] outline-none bg-black placeholder:text-skin-secondary placeholder:text-[20px]"
          placeholder="What is happening?!"
        ></textarea>
      </div>
      <div className="flex gap-4">
        <GallerySvg />
        <EmojisSvg />
        <GifSvg />
        <PollSvg />
        <ScheduleSvg />
      </div>
      <div className="flex items-center justify-center py-2 text-[0.9rem] font-black w-[4.8rem] rounded-full bg-custom opacity-50">
        Post
      </div>
    </div>
  );
};

export default Upload;
