import { Filters } from "./components/Filters";
import { Catalog } from "./components/Catalog";

export const MainPage = ({
  favoriteList,
  setFavoriteList,
  setSelectedCategory,
  goods
}) => {
  return (
    <>
      <div className="wrap flex gap-5 justify-between">
        <Filters goods={goods} setSelectedCategory={setSelectedCategory}/>
        <Catalog
          goods={goods}
          favoriteList={favoriteList}
          setFavoriteList={setFavoriteList}
        />
      </div>
    </>
  );
};
