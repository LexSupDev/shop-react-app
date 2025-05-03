import { Filters } from "./components/Filters";
import { Catalog } from "./components/Catalog";

export const MainPage = ({
  searchQuery,
  favoriteList,
  setFavoriteList,
  goods,
}) => {
  return (
    <>
      <div className="wrap flex gap-5 justify-between">
        <Filters goods={goods} />
        <Catalog
          goods={goods}
          searchQuery={searchQuery}
          favoriteList={favoriteList}
          setFavoriteList={setFavoriteList}
        />
      </div>
    </>
  );
};
