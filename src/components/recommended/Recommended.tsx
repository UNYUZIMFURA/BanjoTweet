import React from "react"
import Search from "../search/Search"
import Subscribe from "../subscribe/Subscribe"
import Trends from "../trends/Trends"
import WhoToFollow from "../who-to-follow/WhoToFollow"

const Recommended = () => {
    return (
        <div className="sticky -top-[50rem] ml-5 hidden h-screen w-[18rem] flex-col gap-4 pt-2 text-white min-[1003px]:flex min-[1093px]:w-[25rem]">
            <Search />
            <Subscribe />
            <Trends />
            <WhoToFollow />
        </div>
    )
}

export default Recommended
