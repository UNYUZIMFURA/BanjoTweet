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

const SideBar = () => {
  return (
    <div className="sm:h-[54rem] fixed bottom-0 w-full flex items-center justify-between px-4 py-3 sm:static sm:flex-col sm:w-[4.5rem] xl:w-[16.4rem] sm:border-r sm:border-custom sm:py-5 xl:items-start text-white">
      <div className="hidden sm:flex xl:px-">
        <LogoSvg />
      </div>
      <div className="xl:flex items-center justify-center gap-4 xl:p-0">
        <HomeSvg />
        <span className="hidden xl:block text-[20px] font-bold">Home</span>
      </div>
      <div className="xl:flex items-center justify-center gap-4 xl:p-0">
        <SearchSvg />
        <span className="hidden xl:block text-[20px]">Explore</span>
      </div>
      <div className="xl:flex items-center justify-center gap-4 xl:p-0">
        <GrokSvg />
        <span className="hidden xl:block text-[20px]">Grok</span>
      </div>
      <div className="xl:flex items-center justify-center gap-4 xl:p-0">
        <NotifySvg />
        <span className="hidden xl:block text-[20px]">Notifications</span>
      </div>
      <div className="sm:flex items-center justify-center gap-4 xl:p-0">
        <MessageSvg />
        <span className="hidden xl:block text-[20px]">Messages</span>
      </div>
      <div className="sm:flex hidden items-center justify-center gap-4 xl:p-0">
        <ListSvg />
        <span className="hidden xl:block text-[20px]">Lists</span>
      </div>
      <div className="sm:flex hidden items-center justify-center gap-4 xl:p-0">
        <BookMarkSvg />
        <span className="hidden xl:block text-[20px]">Bookmarks</span>
      </div>
      <div className="sm:flex hidden items-center justify-center gap-4 xl:p-0">
        <CommunitySvg />
        <span className="hidden xl:block text-[20px]">Communities</span>
      </div>
      <div className="sm:flex hidden items-center justify-center gap-4 xl:p-0">
        <ProfileSvg />
        <span className="hidden xl:block text-[20px]">Profile</span>
      </div>
      <div className="sm:flex hidden items-center justify-center gap-4 xl:p-0">
        <MoreSvg />
        <span className="hidden xl:block text-[20px]">More</span>
      </div>
      <div className="flex-col items-center gap-8 hidden sm:flex">
        <div className="h-[52px] w-[52px] rounded-full bg-custom flex items-center justify-center">
          <CreateSvg />
        </div>
        <div className="rounded-full object-cover h-[40px] w-[40px] border"></div>
      </div>
    </div>
  );
};

export default SideBar;
