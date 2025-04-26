import { Card } from "./Card";

export const Catalog = ({
  filteredGoods,
  searchQuery,
  favoriteList,
  setFavoriteList,
}) => {
  return (
    <>
      <div className="flex w-full flex-col">
        <div className="flex justify-between items-baseline w-full mb-4">
          <h1 className="font-[Satoshi-Bold] text-[32px]">Casual</h1>
          <div className="flex gap-3">
            <p>Showing 1-10 of {filteredGoods.length} Products</p>
            <p>
              Sort by:
              <span className="font-[Satoshi-Medium]">Most Popular</span>
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-9">
          {(searchQuery
            ? filteredGoods.filter((el) =>
                el.category.toLowerCase().includes(searchQuery.toLowerCase())
              )
            : filteredGoods
          ).map((el) => (
            <Card
              key={el.id}
              id={el.id}
              image={el.image}
              title={el.title}
              stars={el.stars}
              price={el.price}
              favoriteList={favoriteList}
              setFavoriteList={setFavoriteList}
            />
          ))}
        </div>
      </div>
    </>
  );
};
