import Image from "next/image"

interface Props {
    suggestedImage: string
    username: string
    displayName: string
}

const RecommendedFollow: React.FC<Props> = ({
    suggestedImage,
    username,
    displayName,
}) => {
    return (
        <div className="flex cursor-pointer justify-between px-4 py-3 transition duration-200 ease-in hover:bg-primaryhover">
            <div className="flex gap-4">
                <div className="relative h-[3.2rem] w-[3.2rem] overflow-hidden rounded-full border border-custom">
                    <Image
                        src={`https://source.unsplash.com/600x600/?${suggestedImage}`}
                        fill={true}
                        className="object-cover"
                        alt=""
                    />
                </div>
                <div className="flex flex-col">
                    <span className="font-bold">{displayName}</span>
                    <span className="text-skin-secondary">@{username}</span>
                </div>
            </div>
            <button className="h-[2.5rem] rounded-full bg-white px-5 text-sm font-bold text-black">
                Follow
            </button>
        </div>
    )
}

export default RecommendedFollow
