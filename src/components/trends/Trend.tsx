import { TrendDotsSvg } from "@/utils/svgs";
import { TrendProps } from "@/types/TrendProps";

const Trend:React.FC<TrendProps> = ({title,sector, posts}) => {
  return (
    <div className="flex justify-between transition duration-200 ease-in hover:bg-primaryhover p-4 cursor-pointer w-full">
      <div className="flex flex-col">
        <span className="text-skin-secondary text-[13px]">
          {title}
        </span>
        <span className="font-bold text-[15px]">{sector}</span>
        <span className="text-skin-secondary text-[13px]">{posts}</span>
      </div>
      <TrendDotsSvg />
    </div>
  );
};

export default Trend;
