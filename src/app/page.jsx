import { Search2Svg } from "@/svgs";
import Header from "@/components/header/Header";
import SideBar from "@/components/sidebar/SideBar";
import Upload from "@/components/upload/Upload";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen min-[690px]:justify-center flex-col sm:flex-row">
      <SideBar />
      <div className="flex flex-col w-full max-w-[38rem]">
        <div className="flex flex-col w-full border-r border-b border-custom">
          <Header />
          <Upload />
        </div>
        <div className="h-full w-full hidden"></div>
      </div>
      <div className="hidden gap-4 w-[18rem] pt-2 px-2 min-[1003px]:flex flex-col border border-custom ml-5 min-[1093px]:w-[22rem]">
        <div className="flex items-center h-[50px] rounded-full bg-inputsbg w-full pl-5 gap-4">
          <Search2Svg />
          <input
            className="outline-none text-skin-inputsclr h-[50px] bg-inputsbg placeholder:text-skin-secondary w-[88%] rounded-r-full"
            placeholder="Search"
          />
        </div>
        <div className="flex gap-3 rounded-xl flex-col text-white bg-secondary p-4">
          <span className="font-bold text-xl">Subscribe to Premium</span>
          <span className="text-[15px]">
            Subscribe to unlock new features and if eligible,receive a share of
            ads revenue.  
          </span>
          <button className="bg-custom h-[40px] w-[110px] text-[15px] font-bold rounded-full">
            Subscribe
          </button>
        </div>
      </div>
    </main>
  );
}
