import {
  LogoSvg,
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
} from "@/svgs";

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
    svg: ProfileSvg,
    text: "Profile",
  },
  {
    svg: MoreSvg,
    text: "More",
  },
];

const SideBar = () => {
  return (
    <div className="sm:gap-8 fixed bottom-0 w-full flex items-center justify-between px-4 py-3 sm:static sm:flex-col sm:w-[4.5rem] xl:w-[16.4rem] sm:border-r sm:border-custom sm:py-5 xl:items-start text-white">
      <div className="hidden sm:flex">
        <LogoSvg />
      </div>
      {svgs.map((item, index) =>
        item.text === "Lists" ||
        item.text === "Bookmarks" ||
        item.text === "Communities" ||
        item.text === "Profile" ||
        item.text === "More" ? (
          <div
            key={index}
            className="sm:flex hidden items-center justify-center gap-4"
          >
            <item.svg />
            <span className="hidden xl:block text-[20px]">{item.text}</span>
          </div>
        ) : (
          <div
            key={index}
            className="xl:flex items-center justify-center gap-4"
          >
            <item.svg />
            <span className="hidden xl:block text-[20px]">{item.text}</span>
          </div>
        )
      )}
      <div className="flex-col items-center gap-14 hidden sm:flex">
        <div className="h-[52px] w-[52px] rounded-full bg-custom flex items-center justify-center">
          <CreateSvg />
        </div>
        <div className="rounded-full object-cover h-[40px] w-[40px] border"></div>
      </div>
    </div>
  );
};

export default SideBar;
