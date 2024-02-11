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
      <div className="hidden md:flex w-[18rem] border border-custom ml-5 min-[1093px]:w-[22rem]"></div>
    </main>
  );
}
