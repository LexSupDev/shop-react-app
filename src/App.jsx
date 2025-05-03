import { useEffect, useState } from "react";
import "./App.css";
import { MainPage } from "./MainPage";
import { Route, Routes } from "react-router";
import { FavoritePage } from "./FavoritePage";
import { Header } from "./components/Header";
import { Breadcrumbs } from "./components/Breadcrumbs";
import { Cart } from "./Cart";
import { ProductCard } from "./ProductCard";
import { Footer } from "./components/Footer";

function App() {
  const [goods, setGoods] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [favoriteList, setFavoriteList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/goods")
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        setGoods(result);
      })
      .catch((error) => console.log(error));
  }, []);

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
              goods={goods}
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
        <Route path="/shop-react-app/product" element={<ProductCard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
