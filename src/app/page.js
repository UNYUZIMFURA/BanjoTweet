import Header from "@/components/header/Header";
import SideBar from "@/components/sidebar/SideBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col min-[500px]:flex-row">
      <SideBar />
     <Header />
    </main>
  );
}
