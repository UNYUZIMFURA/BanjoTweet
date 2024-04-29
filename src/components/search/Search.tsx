import { Search2Svg } from "@/utils/svgs"

const Search = () => {
    return (
        <div className="flex h-[50px] w-full items-center gap-4 rounded-full bg-inputsbg pl-5">
            <Search2Svg />
            <input
                className="h-[50px] w-[88%] rounded-r-full bg-inputsbg text-skin-inputsclr outline-none placeholder:text-skin-secondary"
                placeholder="Search"
            />
        </div>
    )
}

export default Search
