import { Card } from "./Card";
import { useFiltersStore } from "./Store/FiltersStore";

export const Catalog = () => {

  const filteredList = useFiltersStore(state => state.filteredList)
  return (
    <>
      <div className="flex w-full flex-col">
        <div className="flex justify-between items-baseline mb-4">
          <h1 className="font-[Satoshi-Bold] text-[32px]">Casual</h1>
          <div className="flex gap-3">
            <p>Showing 1-10 of {filteredList.length} Products</p>
            <p>
              Sort by:
              <span className="font-[Satoshi-Medium]">Most Popular</span>
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-9">
          {filteredList.map((product) => (
            <Card
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </>
  );
};
