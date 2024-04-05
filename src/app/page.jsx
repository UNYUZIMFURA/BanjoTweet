import Header from "@/components/header/Header";
import SideBar from "@/components/sidebar/SideBar";
import Upload from "@/components/upload/Upload";
import Recommended from "@/components/recommended/Recommended";
import Posts from "@/components/posts/Posts";

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col sm:flex-row max-w-[80rem] items-center mx-auto">
      <div className="min-[690px]:justify-center flex h-full w-full min-[690px]:mx-auto">
        <SideBar />
        <div className="sm:ml-[4.5rem] min-[690px]:ml-[6rem] xl:ml-[16.5rem] w-full flex flex-col max-w-[38rem]">
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
