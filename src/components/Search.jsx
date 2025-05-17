import { useFiltersStore } from "./Store/FiltersStore";
import search from "/src/assets/search.png";

export const Search = () => {

  const searchQuery = useFiltersStore(state => state.searchQuery)

  return (
    <>
      <div className="w-full max-w-[560px] relative">
        <input
          type="text"
          className="bg-[#F0F0F0] rounded-3xl w-full p-3 pl-[52px] relative"
          placeholder="Search for products..."
          name="Search"
          onChange={(e) => useFiltersStore.setState({searchQuery: e.target.value})}
          value={searchQuery}
        />
        <span className="absolute w-[21px] left-4 top-3" aria-hidden="true">
          <img src={search} alt="Search icon" />
        </span>
      </div>
    </>
  );
};
