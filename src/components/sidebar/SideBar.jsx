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
    <div className="sm:min-h-[50rem] fixed bottom-0 w-full flex items-center justify-between px-4 py-3 sm:static sm:flex-col sm:w-[4.5rem] xl:w-[23rem] sm:border sm:border-custom sm:py-5 xl:items-start text-white">
      <div className="hidden sm:flex">
        <LogoSvg />
      </div>
      <div className="xl:flex items-center justify-center gap-4 xl:p-6">
        <HomeSvg />
        <span className="hidden xl:block">Home</span>
      </div>
      <div className="xl:flex items-center justify-center gap-4 xl:p-6">
        <SearchSvg />
        <span className="hidden xl:block">Explore</span>
      </div>
      <div className="xl:flex items-center justify-center gap-4 xl:p-6">
        <GrokSvg />
        <span className="hidden xl:block">Grok</span>
      </div>
      <div className="xl:flex items-center justify-center gap-4 xl:p-6">
        <NotifySvg />
        <span className="hidden xl:block">Notifications</span>
      </div>
      <div className="sm:flex items-center justify-center gap-4 xl:p-6">
        <MessageSvg />
        <span className="hidden xl:block">Messages</span>
      </div>
      <div className="sm:flex hidden items-center justify-center gap-4 xl:p-6">
        <ListSvg />
        <span className="hidden xl:block">Lists</span>
      </div>
      <div className="sm:flex hidden items-center justify-center gap-4 xl:p-6">
        <BookMarkSvg />
        <span className="hidden xl:block">Bookmarks</span>
      </div>
      <div className="sm:flex hidden items-center justify-center gap-4 xl:p-6">
        <CommunitySvg />
        <span className="hidden xl:block">Communities</span>
      </div>
      <div className="sm:flex hidden items-center justify-center gap-4 xl:p-6">
        <ProfileSvg />
        <span className="hidden xl:block">Profile</span>
      </div>
      <div className="sm:flex hidden items-center justify-center gap-4 xl:p-6">
        <MoreSvg />
        <span className="hidden xl:block">More</span>
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
