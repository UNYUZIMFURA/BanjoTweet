import { TrendDotsSvg } from "@/utils/svgs"
import { TrendProps } from "@/types/TrendProps"

const Trend: React.FC<TrendProps> = ({ title, sector, posts }) => {
    return (
        <div className="flex w-full cursor-pointer justify-between p-4 transition duration-200 ease-in hover:bg-primaryhover">
            <div className="flex flex-col">
                <span className="text-[13px] text-skin-secondary">{title}</span>
                <span className="text-[15px] font-bold">{sector}</span>
                <span className="text-[13px] text-skin-secondary">{posts}</span>
            </div>
            <TrendDotsSvg />
        </div>
    )
}

export default Trend
