import { Card } from "./components/Card";

export const FavoritePage = ({ favoriteList, setFavoriteList, goods }) => {
  return (
    <>
      <div className="wrap">
        <h2 className="uppercase font-[Integral-CF-Bold] text-[40px] leading-none mb-6">
          Your Favorites
        </h2>
        <div className="w-full border border-gray-200 rounded-2xl py-5 px-6 flex flex-wrap gap-x-5 gap-y-9 justify-between">
          {goods
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
            ))}

          {/* <Card/> */}
        </div>
      </div>
    </>
  );
};
