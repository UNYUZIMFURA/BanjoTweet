import Header from "@/components/header/Header";
import SideBar from "@/components/sidebar/SideBar";
import Upload from "@/components/upload/Upload";
import Recommended from "@/components/recommended/Recommended";
import Posts from "@/components/posts/Posts";

export default function Home() {
  return (
    <main className="flex h-screen w-screen min-[690px]:justify-center flex-col sm:flex-row max-w-[80rem] items-center mx-auto">
      <div className="flex h-full w-full">
        <SideBar />
        <div className="sm:ml-[4.5rem] xl:ml-[16.5rem] flex flex-col w-full max-w-[38rem]">
          <div className="flex flex-col w-full border-r border-b border-custom">
            <Header />
            <Upload />
          </div>
          <Posts />
        </div>
        <Recommended />
      </div>
    </main>
  );
}
