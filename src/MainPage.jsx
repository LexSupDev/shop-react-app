import { Header } from "./components/Header";
import { Breadcrumbs } from "./components/Breadcrumbs";
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
      <div className="wrap flex gap-5">
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
