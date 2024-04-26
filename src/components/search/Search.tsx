import { Search2Svg } from "@/utils/svgs";

const Search = () => {
  return (
    <div className="sticky top-0 flex items-center h-[50px] rounded-full bg-inputsbg w-full pl-5 gap-4">
      <Search2Svg />
      <input
        className="outline-none text-skin-inputsclr h-[50px] bg-inputsbg placeholder:text-skin-secondary w-[88%] rounded-r-full"
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
