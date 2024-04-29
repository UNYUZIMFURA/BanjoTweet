import Trend from "./Trend"
import { TrendProps } from "@/types/TrendProps"

const Trends = () => {
    const trends: TrendProps[] = [
        {
            title: "Trending in Rwanda",
            sector: "London",
            posts: "26.9K posts",
        },
        {
            title: "Trending in Rwanda",
            sector: "Python",
            posts: "16.5K posts",
        },
        {
            title: "Football, Trending",
            sector: "Lionel Messi",
            posts: "42.1K posts",
        },
        {
            title: "Sports, Trending",
            sector: "Arsenal",
            posts: "23.4K posts",
        },
        {
            title: "Sports, Trending",
            sector: "Inter Miami",
            posts: "50K posts",
        },
        {
            title: "Politics, Trending",
            sector: "Israel",
            posts: "1.2M posts",
        },
        {
            title: "Sports, Trending",
            sector: "GOAT",
            posts: "173K posts",
        },
        {
            title: "Music, Trending",
            sector: "Wizkid",
            posts: "31.4K posts",
        },
    ]
    return (
        <div className="flex flex-col rounded-xl border border-custom bg-black pb-2 ">
            <span className="px-5 pb-4 pt-5 text-xl font-bold">
                Trends for you
            </span>
            <div className="flex w-full flex-col">
                {trends.map((trend, index) => (
                    <Trend
                        key={index}
                        title={trend.title}
                        sector={trend.sector}
                        posts={trend.posts}
                    />
                ))}
            </div>
        </div>
    )
}

export default Trends
