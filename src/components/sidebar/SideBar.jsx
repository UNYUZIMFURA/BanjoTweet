import {LogoSvg, HomeSvg, SearchSvg, GrokSvg, NotifySvg, MessageSvg, ListSvg, BookMarkSvg, CommunitySvg, ProfileSvg, MoreSvg, CreateSvg } from "@/svgs"

const SideBar = () => {
  return (
    <div className='fixed bottom-0 w-full flex items-center justify-between px-4 py-3 min-[500px]:static min-[500px]:flex-col min-[500px]:w-[4.5rem] min-[500px]:border-r min-[500px]:border-custom min-[500px]:py-5'>
      <div className="hidden min-[500px]:flex bg-slate-400">
        <LogoSvg />
      </div>    
      <HomeSvg />
      <SearchSvg />
      <GrokSvg />
      <NotifySvg />
      <MessageSvg />
      <div className="hidden min-[500px]:flex">
        <ListSvg />
      </div>
      <div className="hidden min-[500px]:flex">
        <BookMarkSvg />
      </div>
      <div className="hidden min-[500px]:flex">
        <CommunitySvg />
      </div>
      <div className="hidden min-[500px]:flex">
        <ProfileSvg />
      </div>
      <div className="hidden min-[500px]:flex">
        <MoreSvg />
      </div>
      <div className="flex-col items-center gap-8 hidden min-[500px]:flex bg-slate-400">
      <div className="h-[52px] w-[52px] rounded-full bg-custom flex items-center justify-center">
        <CreateSvg />
      </div>
      <div className='rounded-full object-cover h-[40px] w-[40px] border'>
      </div>
      </div>
    </div>
  )
}

export default SideBar