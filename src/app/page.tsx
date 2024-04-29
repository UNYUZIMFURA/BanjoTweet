import Header from "@/components/header/Header"
import SideBar from "@/components/sidebar/SideBar"
import Upload from "@/components/upload/Upload"
import Recommended from "@/components/recommended/Recommended"
import Posts from "@/components/posts/Posts"

export default function Home() {
    return (
        <main className="mx-auto flex min-h-screen w-screen max-w-[80rem] flex-col items-center sm:flex-row">
            <div className="mx-auto flex h-full w-full justify-center">
                <div className="flex w-full justify-start min-[690px]:w-[calc(100%-4.5rem)] min-[760px]:w-[42.5rem] min-[1003px]:w-[62.5rem] min-[1093px]:w-[65rem] xl:w-[76.5rem]">
                    <SideBar />
                    <div className="mb-[3rem] flex w-full max-w-[38rem] flex-col sm:ml-[4.5rem] min-[500px]:mb-0 xl:ml-[16.5rem]">
                        <div className="flex w-full flex-col border-b border-r border-custom">
                            <Header />
                            <Upload />
                        </div>
                        <Posts />
                    </div>
                    <Recommended />
                </div>
            </div>
        </main>
    )
}
