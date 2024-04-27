import Image from "next/image"
import "@/app/globals.css"
import { TrendDotsSvg, VerifiedSvg } from "@/utils/svgs"
import { LuDot } from "react-icons/lu"

interface Props {
    category: string
}

const Post: React.FC<Props> = ({ category }) => {
    return (
        <div className="flex flex-col border-b border-r border-custom pb-4 text-white">
            <div className="flex items-start justify-between px-2 py-3">
                <div className="flex w-full gap-2 xs:gap-4">
                    <div className="h-[2.5rem] w-[3.2rem] rounded-full border xs:w-[2.5rem]"></div>
                    <div className="flex flex-col items-start gap-1">
                        <div className="flex flex-col items-start min-[420px]:flex-row min-[420px]:gap-3">
                            <div className="flex items-center gap-1">
                                <span className="text-[15px] font-bold">
                                    Historic Vids
                                </span>
                                <VerifiedSvg />
                            </div>
                            <div className="flex items-center">
                                <span className="text-[15px] text-skin-secondary">
                                    @historyinmemes
                                </span>
                                <LuDot
                                    className="mt-0.5"
                                    color="rgb(113, 118, 123)"
                                />
                                <span className="text-skin-secondary">15h</span>
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
