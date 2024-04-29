import Image from "next/image"
import {
    LogoSvg,
    LogoSmallSvg,
    HomeSvg,
    SearchSvg,
    GrokSvg,
    NotifySvg,
    MessageSvg,
    ListSvg,
    BookMarkSvg,
    CommunitySvg,
    ProfileSvg,
    MoreSvg,
    CreateSvg,
} from "@/utils/svgs"

const svgs = [
    {
        svg: HomeSvg,
        text: "Home",
    },
    {
        svg: SearchSvg,
        text: "Explore",
    },
    {
        svg: GrokSvg,
        text: "Grok",
    },
    {
        svg: NotifySvg,
        text: "Notifications",
    },
    {
        svg: MessageSvg,
        text: "Messages",
    },

    {
        svg: ListSvg,
        text: "Lists",
    },
    {
        svg: BookMarkSvg,
        text: "Bookmarks",
    },
    {
        svg: CommunitySvg,
        text: "Communities",
    },
    {
        svg: LogoSmallSvg,
        text: "Premium",
    },
    {
        svg: ProfileSvg,
        text: "Profile",
    },
    {
        svg: MoreSvg,
        text: "More",
    },
]

const SideBar = () => {
    return (
        <div className="fixed bottom-0 z-10 flex w-full items-center justify-between bg-black px-4 py-3 text-white sm:h-screen sm:w-[4.5rem] sm:flex-col sm:border-r sm:border-custom xl:w-[16.5rem] xl:items-start">
            <div className="flex w-full items-center justify-between sm:flex-col sm:gap-[2rem] xl:items-start xl:gap-5">
                <div className="hidden sm:flex">
                    <LogoSvg />
                </div>
                {svgs.map((item, index) =>
                    item.text === "Lists" ||
                    item.text === "Profile" ||
                    item.text === "Premium" ||
                    item.text === "More" ? (
                        <div
                            key={index}
                            className="hidden items-center justify-center gap-4 sm:flex"
                        >
                            <item.svg />
                            <span className="hidden text-[20px] xl:block">
                                {item.text}
                            </span>
                        </div>
                    ) : item.text === "Bookmarks" ||
                      item.text === "Communities" ? (
                        <div
                            key={index}
                            className="hidden items-center justify-center gap-4 xl:flex"
                        >
                            <item.svg />
                            <span className="hidden text-[20px] xl:block">
                                {item.text}
                            </span>
                        </div>
                    ) : (
                        <div
                            key={index}
                            className="items-center justify-center gap-4 xl:flex"
                        >
                            <item.svg />
                            <span className="hidden text-[20px] xl:block">
                                {item.text}
                            </span>
                        </div>
                    ),
                )}
                <div className="hidden h-[52px] w-[52px] items-center justify-center rounded-full bg-custom sm:flex xl:hidden">
                        <CreateSvg />           
                </div>
                <button className="hidden xl:flex bg-custom p-3 w-full rounded-full items-center justify-center font-bold">Post</button>
            </div>
            <div className="hidden w-full items-center gap-4 sm:flex">
                <div className="cursor-pointer relative hidden h-[42px] w-[42px] overflow-hidden rounded-full object-cover sm:flex">
                    <Image
                        src={`https://source.unsplash.com/800x800/?person`}
                        fill={true}
                        className="object-cover"
                        alt=""
                    />
                </div>
                <div className="cursor-pointer hidden flex-col items-start xl:flex">
                    <span className="text-[15px] font-bold text-white">
                        Joy Kevin Banjo
                    </span>
                    <span className="text-[15px] text-skin-secondary">
                        @joykevinbanjo
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SideBar
