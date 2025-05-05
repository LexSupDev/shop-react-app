import { Card } from "./Card";

export const Catalog = ({
  goods,
  favoriteList,
  setFavoriteList,
}) => {
  return (
    <>
      <div className="flex w-full flex-col">
        <div className="flex justify-between items-baseline mb-4">
          <h1 className="font-[Satoshi-Bold] text-[32px]">Casual</h1>
          <div className="flex gap-3">
            <p>Showing 1-10 of {goods.length} Products</p>
            <p>
              Sort by:
              <span className="font-[Satoshi-Medium]">Most Popular</span>
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-9">
          {goods.map((product) => (
            <Card
              key={product.id}
              product={product}
              favoriteList={favoriteList}
              setFavoriteList={setFavoriteList}
            />
          ))}
        </div>
      </div>
    </>
  );
};
