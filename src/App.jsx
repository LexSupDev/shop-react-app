import { useState } from "react";
import "./App.css";
import { goods } from "./components/goods";
import { MainPage } from "./MainPage";
import { Route, Routes } from "react-router";
import { FavoritePage } from "./FavoritePage";
import { Header } from "./components/Header";
import { Breadcrumbs } from "./components/Breadcrumbs";
import { Cart } from "./Cart";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);
  const [filteredGoods, setFilteredGoods] = useState(goods);
  const [favoriteList, setFavoriteList] = useState([]);

  const filterCatalog = (e) => {
    setSelectedColor(e);
    setFilteredGoods(
      goods.filter((el) => el.colors.some((color) => color === e))
    );
  };

  return (
    <>
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        favoriteList={favoriteList}
      />
      <Breadcrumbs />
      <Routes>
        <Route
          path="/shop-react-app/"
          element={
            <MainPage
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              favoriteList={favoriteList}
              setFavoriteList={setFavoriteList}
              filterCatalog={filterCatalog}
              filteredGoods={filteredGoods}
            />
          }
        />
        <Route
          path="/shop-react-app/favorite"
          element={
            <FavoritePage
              favoriteList={favoriteList}
              setFavoriteList={setFavoriteList}
              goods={goods}
            />
          }
        />
        <Route path="/shop-react-app/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
