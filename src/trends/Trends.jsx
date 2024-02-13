import { TrendDotsSvg } from "@/svgs";

const Trends = () => {
  return (
    <div className="flex flex-col bg-secondary rounded-xl">
      <span className="font-bold p-5">Trends for you</span>
      <div className="flex flex-col">
        <div className="flex justify-between hover:bg-btnhover p-4 cursor-pointer">
          <div className="flex flex-col">
            <span className="text-skin-secondary text-[13px]">
              Trending in Rwanda
            </span>
            <span className="font-bold text-[15px]">Kigali</span>
            <span className="text-skin-secondary text-[13px]">2,558 posts</span>
          </div>
          <TrendDotsSvg />
        </div>
        <div className="flex justify-between hover:bg-btnhover p-4 cursor-pointer">
          <div className="flex flex-col">
            <span className="text-skin-secondary text-[13px]">
              Trending in Rwanda
            </span>
            <span className="font-bold text-[15px]">Kigali</span>
            <span className="text-skin-secondary text-[13px]">2,558 posts</span>
          </div>
          <TrendDotsSvg />
        </div>
      </div>
    </div>
  );
};

export default Trends;
