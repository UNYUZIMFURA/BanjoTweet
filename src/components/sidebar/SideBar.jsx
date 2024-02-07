import { HomeSvg, SearchSvg, GrokSvg, NotifySvg, MessageSvg } from "@/svgs"

const SideBar = () => {
  return (
    <div className='fixed bottom-0 w-full flex items-center justify-between px-4 py-3'>
       <HomeSvg />
       <SearchSvg />
       <GrokSvg />
       <NotifySvg />
       <MessageSvg />
    </div>
  )
}

export default SideBar