"use client"
import "@/app/globals.css"
import Image from "next/image"
import { v4 } from "uuid";
import { useState } from "react"
import { PostProps } from "@/types/PostProps"
import { TrendDotsSvg, VerifiedSvg } from "@/utils/svgs"
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
    analytics,
}) => {

    const [liked, setLiked] = useState(false)
    const [retweeted, setRetweeted] = useState(false)
    const [bookmarked, setBookmarked] = useState(false)
    const [uploaded, setUploaded] = useState(false)
    return (
        <div className="flex cursor-pointer flex-col border-b border-r border-custom pb-5 text-white hover:bg-[#0a0a0a] min-[380px]:pb-0">
            <div className="flex items-start justify-between px-2 py-3">
                <div className="flex w-full gap-2 xs:gap-4">
                    <div className="loading relative h-[2.5rem] w-[3.2rem] cursor-pointer overflow-hidden rounded-full xs:w-[2.5rem]">
                        <Image
                            src={`https://picsum.photos/600/600?random=${v4()}`}
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
            <div className="loading relative ml-[12%] h-[26rem] w-[85%] overflow-hidden rounded-2xl md:h-[28rem] xl:h-[32rem]">
                <Image
                    src={`https://picsum.photos/600/600?random=${v4()}`}
                    fill={true}
                    className="object-cover"
                    alt=""
                />
            </div>
            <div className="ml-[12%] hidden w-[85%] items-center justify-between py-4 text-skin-secondary min-[380px]:flex">
                <div className="group flex items-center gap-[3px]">
                    <div className="rounded-full p-1 group-hover:bg-[#1D9BF01A]">
                        <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            width="20"
                            className="fill-[rgb(113,118,123)] group-hover:fill-[#1D9BF0]"
                        >
                            <g>
                                <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                            </g>
                        </svg>
                    </div>
                    <span
                        className={`hover:text-custom text-[13px] group-hover:text-[#1D9BF0]`}
                    >
                        {comments}
                    </span>
                </div>
                <div
                    className="group flex items-center gap-[3px]"
                    onClick={() => setRetweeted((prevState) => !prevState)}
                >
                    <div className="rounded-full p-1 group-hover:bg-[#00BA7C1A]">
                        <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            width="20"
                            className={`transition ease-in-out ${retweeted ? "fill-[#00BA7C]" : "fill-[rgb(113,118,123)]"} `}
                        >
                            <g>
                                <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                            </g>
                        </svg>
                    </div>
                    <span
                        className={`text-[13px] transition ease-in-out ${retweeted ? "text-[#00BA7C]" : ""}`}
                    >
                        {retweets}K
                    </span>
                </div>
                <div
                    className="group flex items-center gap-[3px]"
                    onClick={() => setLiked((prevState) => !prevState)}
                >
                    <div className="rounded-full p-1 group-hover:bg-[#00BA7C1A]">
                        <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            width="20"
                            className={`transition ease-in-out ${liked ? "fill-[#F91880]" : "fill-[rgb(113,118,123)]"}`}
                        >
                            <g>
                                <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                            </g>
                        </svg>
                    </div>
                    <span
                        className={`text-[13px] transition ease-in-out ${liked ? "text-[#F91880]" : ""}`}
                    >
                        {likes}K
                    </span>
                </div>
                <div className="group flex items-center gap-[3px]">
                    <div className="rounded-full p-1 group-hover:bg-[#1D9BF01A]">
                        <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            width="20"
                            className="fill-[rgb(113,118,123)] group-hover:fill-[#1D9BF0]"
                        >
                            <g>
                                <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
                            </g>
                        </svg>
                    </div>
                    <span className="text-[13px] group-hover:text-[#1D9BF0]">
                        {analytics}M
                    </span>
                </div>
                <div className="flex items-center gap-1">
                    <div
                        className="group rounded-full p-1 hover:bg-[#1D9BF01A]"
                        onClick={() => setBookmarked((prevState) => !prevState)}
                    >
                        <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            width="20"
                            className={`transition ease-in-out ${bookmarked ? "fill-[#1D9BF0]" : "fill-[rgb(113,118,123)]"}`}
                        >
                            <g>
                                <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path>
                            </g>
                        </svg>
                    </div>
                    <div
                        className="group rounded-full p-1 hover:bg-[#1D9BF01A]"
                        onClick={() => setUploaded((prevState) => !prevState)}
                    >
                        <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            width="20"
                            className={`transition ease-in-out ${uploaded ? "fill-[#1D9BF0]" : "fill-[rgb(113,118,123)]"} `}
                        >
                            <g>
                                <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
