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
} from "@/utils/svgs";

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
];

const SideBar = () => {
  return (
    <div className="sm:justify-normal sm:gap-[1.97rem] fixed bottom-0 w-full sm:h-full flex items-center justify-between px-4 py-3 sm:stati sm:flex-col sm:w-[4.5rem] xl:w-[16.5rem] sm:border-r sm:border-custom sm:py-3 xl:items-start text-white">
      <div className="hidden sm:flex">
        <LogoSvg />
      </div>
      {svgs.map((item, index) =>
        item.text === "Lists" ||
        item.text === "Bookmarks" ||
        item.text === "Communities" ||
        item.text === "Premium" ||
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
      <div className="flex-col items-center gap-[3.4rem] hidden sm:flex">
        <div className="h-[52px] w-[52px] rounded-full bg-custom flex items-center justify-center">
          <CreateSvg />
        </div>
        <div className="rounded-full object-cover h-[40px] w-[40px] border"></div>
      </div>
    </div>
  );
};

export default SideBar;
