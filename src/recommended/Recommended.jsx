import Subscribe from "@/components/subscribe/Subscribe";
import Search from "@/search/Search";
import Trends from "@/trends/Trends";

const Recommended = () => {
  return (
    <div className="hidden text-white gap-4 w-[18rem] pt-2 px-2 min-[1003px]:flex flex-col border border-custom ml-5 min-[1093px]:w-[22rem]">
      <Search />
      <Subscribe />
      <Trends />
    </div>
  );
};

export default Recommended;
