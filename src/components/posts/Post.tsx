import "@/app/globals.css"
import Image from "next/image"
import { PostProps } from "@/types/PostProps"
import { AnalyticsSvg, CommentSvg,LikeSvg,RetweetSvg,SaveSvg,TrendDotsSvg, UploadSvg, VerifiedSvg } from "@/utils/svgs"
import { LuDot } from "react-icons/lu"

const Post: React.FC<PostProps> = ({
    category,
    content,
    person,
    displayName,
    username,
    comments,
    retweets,
    likes,
    analytics
}) => {
    return (
        <div className="hover:bg-[#0a0a0a] cursor-pointer flex flex-col border-b border-r border-custom text-white">
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
                            <div className="flex cursor-pointer items-center gap-1">
                                <span className="text-[15px] font-bold">
                                    {displayName}
                                </span>
                                <VerifiedSvg />
                            </div>
                            <div className="flex cursor-pointer items-center">
                                <span className="text-[15px] text-skin-secondary">
                                    @{username}
                                </span>
                                <LuDot
                                    className="mt-0.5"
                                    color="rgb(113, 118, 123)"
                                />
                                <span className="text-skin-secondary">15h</span>
                            </div>
                        </div>
                        <span className="text-[15px] font-extralight">
                            {content}
                        </span>
                    </div>
                </div>
                <TrendDotsSvg />
            </div>
            <div className="loading relative ml-[12%] h-[32rem] w-[85%] overflow-hidden rounded-2xl">
                <Image
                    src={`https://source.unsplash.com/800x800/?${category}`}
                    fill={true}
                    className="object-cover"
                    alt=""
                />
            </div>
            <div className="ml-[12%] flex w-[85%] items-center justify-between py-4 text-skin-secondary">
                <div className="flex items-center gap-1">
                    <CommentSvg />
                    <span className="text-[13px]">{comments}</span>
                </div>
                <div className="flex items-center gap-1">
                    <RetweetSvg />
                    <span className="text-[13px]">{retweets}K</span>
                </div>
                <div className="flex items-center gap-1">
                    <LikeSvg />
                    <span className="text-[13px]">{likes}K</span>
                </div>
                <div className="flex items-center gap-1">
                    <AnalyticsSvg />
                    <span className="text-[13px]">{analytics}M</span>
                </div>
                <div className="flex items-center gap-1">
                    <SaveSvg />
                    <UploadSvg />
                </div>
            </div>
        </div>
    )
}

export default Post
