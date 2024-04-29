import Image from "next/image"
import {
    GallerySvg,
    EmojisSvg,
    GifSvg,
    PollSvg,
    ScheduleSvg,
} from "@/utils/svgs/index"

const Upload = () => {
    return (
        <div className="hidden gap-4 px-4 pb-[0.65rem] pt-4 text-white sm:flex">
            <div className="relative h-[40px] w-[40px] overflow-hidden rounded-full border object-cover">
                <Image
                    src={`https://source.unsplash.com/600x600/?computer`}
                    fill={true}
                    className="object-cover"
                    alt=""
                />
            </div>
            <div className="flex w-[90%] flex-col gap-2">
                <textarea
                    className="h-[50px] resize-none bg-black pt-1 outline-none scrollbar-hide placeholder:text-[20px] placeholder:text-skin-secondary"
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
                    <div className="flex w-[4.8rem] cursor-pointer items-center justify-center rounded-full bg-custom py-2 text-[0.9rem] font-black opacity-50">
                        Post
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upload
