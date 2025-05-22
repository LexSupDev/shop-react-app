import { Card } from "./Card";
import { useFiltersStore } from "./Store/FiltersStore";

export const Catalog = () => {
  const { filteredList, totalPages, selectedPage } = useFiltersStore();

  return (
    <>
      <div className="flex w-full flex-col ">
        <div className="flex justify-between items-baseline mb-4">
          <h1 className="font-[Satoshi-Bold] text-[32px]">Casual</h1>
          <div className="flex gap-3">
            <p>Showing 1-10 of {filteredList.length} Products</p>
            <p>
              Sort by:
              <select
                className="font-[Satoshi-Medium] border-none"
                onChange={(e) => {
                  const [sortBy, order] = e.target.value.split(", ");
                  useFiltersStore.setState({ selectedSort: { sortBy, order } });
                }}
                id="Catalog_sort"
              >
                <option value="stars, desc">Most Rating</option>
                <option value="price, asc">Price: Low to High</option>
                <option value="price, desc">Price: High to Low</option>
              </select>
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-9 pb-8 border-b-1 border-gray-300">
          {filteredList.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-5 flex justify-between items-center">
          <button className="font-[Satoshi-Medium] py-[7px] px-3.5 pl-10 border-1 border-gray-300 rounded-lg relative after:absolute after:content-['.'] after:text-transparent after:block after:w-5 after:h-5 after:bg-[url('/src/assets/arrow-black-left.svg')] after:bg-no-repeat after:left-3.5 after:top-[12px]">
            Previous
          </button>
          <ul className="flex gap-0.5">
            {Array.from({ length: totalPages }, (_, i) => (
              <li
                key={i + 1}
                onClick={() =>
                  useFiltersStore.setState({ selectedPage: (i + 1).toString() })
                }
                className={`w-10 h-10 flex justify-center items-center rounded-lg cursor-pointer ${
                  selectedPage === (i + 1).toString()
                    ? "bg-black text-white"
                    : "bg-gray-100"
                }`}
              >
                {i + 1}
              </li>
            ))}
          </ul>
          <button className="font-[Satoshi-Medium] py-[7px] px-3.5 pr-10 border-1 border-gray-300 rounded-lg relative after:absolute after:content-['.'] after:text-transparent after:block after:w-5 after:h-5 after:bg-[url('/src/assets/arrow-black-left.svg')] after:rotate-180 after:bg-no-repeat after:right-3.5 after:top-[7px]">
            Next
          </button>
        </div>
      </div>
    </>
  );
};
