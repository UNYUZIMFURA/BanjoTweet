import Header from "@/components/header/Header";
import SideBar from "@/components/sidebar/SideBar";
import Upload from "@/components/upload/Upload";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col sm:flex-row">
      <SideBar />
      <div className="flex flex-col w-full border max-w-[40rem]">
        <Header />
        <Upload />
      </div>
      <div className="hidden md:flex w-[30rem]"></div>
    </main>
  );
}
