import { Card } from "./Card";
import { goods } from "./goods";

export const Catalog = ({searchQuery}) => {
  
  return (
    <>
      <div className="flex w-full flex-col">
        <div className="flex justify-between items-baseline w-full mb-4">
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
          {searchQuery ? goods.filter(el => el.category.toLowerCase() == searchQuery.toLowerCase()).map((el) => (
            <Card
              key={el.id}
              image={el.image}
              title={el.title}
              stars={el.stars}
              price={el.price}
            />
          )): goods.map((el) => (
            <Card
              key={el.id}
              image={el.image}
              title={el.title}
              stars={el.stars}
              price={el.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};
