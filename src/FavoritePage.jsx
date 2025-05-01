import { Card } from "./components/Card";
import { Filters } from "./components/Filters";

export const FavoritePage = ({ favoriteList, setFavoriteList, goods }) => {
  return (
    <>
      <div className="wrap">
        <h2 className="uppercase font-[Integral-CF-Bold] text-[40px] leading-none mb-6">
          Your Favorites
        </h2>
        <div className="flex gap-5 justify-between">
          <Filters />
          <div className="w-full flex flex-wrap gap-x-5 gap-y-9 self-start">
            {favoriteList.length ? (
              goods
                .filter((el) => favoriteList.includes(el.id))
                .map((el) => (
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
