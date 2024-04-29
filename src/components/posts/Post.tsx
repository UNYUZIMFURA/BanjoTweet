import "@/app/globals.css"
import Image from "next/image"
import { PostProps } from "@/types/PostProps"
import { TrendDotsSvg, VerifiedSvg } from "@/utils/svgs"
import { LuDot } from "react-icons/lu"

const Post: React.FC<PostProps> = ({
    category,
    person,
    displayName,
    username,
}) => {
    return (
        <div className="flex flex-col border-b border-r border-custom pb-4 text-white">
            <div className="flex items-start justify-between px-2 py-3">
                <div className="flex w-full gap-2 xs:gap-4">
                    <div className="loading relative h-[2.5rem] w-[3.2rem] cursor-pointer overflow-hidden rounded-full xs:w-[2.5rem]">
                        <Image
                            src={`https://source.unsplash.com/800x800/?${person}`}
                            fill={true}
                            className="object-cover"
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <div className="flex flex-col items-start min-[420px]:flex-row min-[420px]:gap-3">
                            <div className="flex items-center gap-1">
                                <span className="cursor-pointer text-[15px] font-bold">
                                    {displayName}
                                </span>
                                <VerifiedSvg />
                            </div>
                            <div className="flex items-center">
                                <span className="cursor-pointer text-[15px] text-skin-secondary">
                                    @{username}
                                </span>
                                <LuDot
                                    cursor="pointer"
                                    className="mt-0.5"
                                    color="rgb(113, 118, 123)"
                                />
                                <span className="cursor-pointer text-skin-secondary">
                                    15h
                                </span>
                            </div>
                        </div>
                        <span className="text-[15px] font-extralight">
                            Mike Tyson: Muhammad Ali is the greatest
                        </span>
                    </div>
                </div>
                <TrendDotsSvg />
            </div>
            <div className="loading relative ml-[12%] h-[32rem] w-[85%] cursor-pointer overflow-hidden rounded-2xl">
                <Image
                    src={`https://source.unsplash.com/800x800/?${category}`}
                    fill={true}
                    className="object-cover"
                    alt=""
                />
            </div>
        </div>
    )
}

export default Post
