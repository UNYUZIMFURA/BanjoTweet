import Header from "@/components/header/Header";
import SideBar from "@/components/sidebar/SideBar";
import Upload from "@/components/upload/Upload";
import Recommended from "@/components/recommended/Recommended";

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
      <Recommended />
    </main>
  );
}
