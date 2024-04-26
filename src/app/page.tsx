import Header from "@/components/header/Header"
import SideBar from "@/components/sidebar/SideBar";
import Upload from "@/components/upload/Upload";
import Recommended from "@/components/recommended/Recommended";
import Posts from "@/components/posts/Posts";

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col sm:flex-row max-w-[80rem] items-center mx-auto">
      <div className="flex justify-center h-full w-full mx-auto">
        <div className="w-full min-[690px]:w-[calc(100%-4.5rem)] min-[760px]:w-[42.5rem] flex justify-start min-[1003px]:w-[54.5rem] min-[1093px]:w-[60rem">
          <SideBar />
          <div className="sm:ml-[4.5rem] xl:ml-[16.5rem] w-full flex flex-col max-w-[38rem]">
            <div className="flex flex-col w-full border-r border-b border-custom">
              <Header />
              <Upload />
            </div>
            <Posts />
          </div>
        </div>
        <Recommended />
      </div>
    </main>
  );
}
