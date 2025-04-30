import { Filters } from "./components/Filters";
import { Catalog } from "./components/Catalog";

export const MainPage = ({
  searchQuery,
  favoriteList,
  setFavoriteList,
  filterCatalog,
  filteredGoods,
}) => {
  return (
    <>
      <div className="wrap flex gap-5 justify-between">
        <Filters filterCatalog={filterCatalog} />
        <Catalog
          filteredGoods={filteredGoods}
          searchQuery={searchQuery}
          favoriteList={favoriteList}
          setFavoriteList={setFavoriteList}
        />
      </div>
    </>
  );
};
