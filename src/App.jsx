import { useState } from "react";
import { Header } from "./components/Header";
import "./App.css";
import { Breadcrumbs } from "./components/Breadcrumbs";
import { Filters } from "./components/Filters";
import { Catalog } from "./components/Catalog";
import { goods } from "./components/goods";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);
  const [filteredGoods, setFilteredGoods] = useState(goods);
  const [favoriteList, setFavoriteList] = useState([])

  const handleFavorites = (id) => {
    favoriteList.includes(id) ? setFavoriteList([...favoriteList.filter(el => el !== id)]) : setFavoriteList([...favoriteList, id])
  }

  const filterCatalog = (e) => {
    setSelectedColor(e);
    setFilteredGoods(
      goods.filter((el) => el.colors.some((color) => color === e))
    );
  };

  return (
    <>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} favoriteList={favoriteList} />
      <Breadcrumbs />
      <div className="wrap flex gap-5">
        <Filters filterCatalog={filterCatalog} />
        <Catalog
          filteredGoods={filteredGoods}
          searchQuery={searchQuery}
          handleFavorites={handleFavorites}
          favoriteList={favoriteList}
        />
      </div>
    </>
  );
}

export default App;
