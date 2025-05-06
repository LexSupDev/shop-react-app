import { Card } from "./components/Card";
import { Filters } from "./components/Filters";

export const FavoritePage = ({
  favoriteList,
  productList,
}) => {
  return (
    <>
      <div className="wrap">
        <h2 className="uppercase font-[Integral-CF-Bold] text-[40px] leading-none mb-6">
          Your Favorites
        </h2>
        <div className="flex gap-5 justify-between">
          <Filters productList={productList} />
          <div className="w-full flex flex-wrap gap-x-5 gap-y-9 self-start">
            {favoriteList.length ? (
              favoriteList.map((product) => (
                <Card
                  key={product.id}
                  product={product}
                  favoriteList={favoriteList}
                />
              ))
            ) : (
              <div className="uppercase text-3xl font-[Satoshi-Bold]">
                No Favorits goods yet
              </div>
            )}

            {/* <Card/> */}
          </div>
        </div>
      </div>
    </>
  );
};
