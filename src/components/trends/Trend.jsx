import { TrendDotsSvg } from "@/svgs";

const Trend = () => {
  return (
    <div className="flex justify-between hover:bg-btnhover p-4 cursor-pointer w-full">
      <div className="flex flex-col">
        <span className="text-skin-secondary text-[13px]">
          Trending in Rwanda
        </span>
        <span className="font-bold text-[15px]">Kigali</span>
        <span className="text-skin-secondary text-[13px]">8,958 posts</span>
      </div>
      <TrendDotsSvg />
    </div>
  );
};

export default Trend;
