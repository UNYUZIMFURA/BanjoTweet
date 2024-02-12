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
    <div className="text-white hidden gap-4 pt-4 pb-1 sm:flex p-4">
      <div className="rounded-full object-cover h-[40px] w-[40px] border"></div>
      <div className="w-[90%] flex flex-col">
        <textarea
          className="resize-none h-[100px] pt-1 outline-none bg-black placeholder:text-skin-secondary placeholder:text-[20px]"
          placeholder="What is happening?!"
        ></textarea>

        <div className="flex w-full justify-between">
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
      </div>
    </div>
  );
};

export default Upload;
