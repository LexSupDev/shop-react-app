import { Card } from "./Card";
import { useFiltersStore } from "./Store/FiltersStore";

export const Catalog = () => {
  const filteredList = useFiltersStore((state) => state.filteredList);

  return (
    <>
      <div className="flex w-full flex-col">
        <div className="flex justify-between items-baseline mb-4">
          <h1 className="font-[Satoshi-Bold] text-[32px]">Casual</h1>
          <div className="flex gap-3">
            <p>Showing 1-10 of {filteredList.length} Products</p>
            <p>
              Sort by:
              <select
                className="font-[Satoshi-Medium] border-none"
                onChange={(e) => {
                  const [sortBy, order] = e.target.value.split(",");
                  useFiltersStore.setState({ selectedSort: { sortBy, order } });
                }}
                name=""
                id=""
              >
                <option value="stars, asc">Most Rating</option>
                <option value="price, asc">
                  Price: Low to High
                </option>
                <option value="price, desc">
                  Price: High to Low
                </option>
              </select>
            </p>
          </div>
        </div>
        {console.log(useFiltersStore.getState().selectedSort)}
        <div className="flex flex-wrap gap-x-5 gap-y-9">
          {filteredList.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};
