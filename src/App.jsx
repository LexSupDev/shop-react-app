import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import { MainPage } from "./MainPage";
import { FavoritePage } from "./FavoritePage";
import { Header } from "./components/Header";
import { Breadcrumbs } from "./components/Breadcrumbs";
import { Cart } from "./Cart";
import { ProductCard } from "./ProductCard";
import { Footer } from "./components/Footer";
import { useFavoriteStore } from "./components/FavoriteStore";
import { useGoodsStore } from "./components/GoodsStore";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  // useEffect(() => {
  //   fetch(
  //     `http://localhost:3000/goods?q=${searchQuery}`
  //   )
  //     .then((response) => response.json())
  //     .then((result) => {
  //       //setGoods(result);
  //     })
  //     .catch((error) => console.log(error));
  // }, [searchQuery]);

  useEffect(() => {
    useGoodsStore.getState().fetch();
  }, []);

  useEffect(() => {
    useFavoriteStore.getState().fetch();
  }, []);

  return (
    <>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Breadcrumbs />
      <Routes>
        <Route path="/shop-react-app/" element={<MainPage />} />
        <Route path="/shop-react-app/favorite" element={<FavoritePage />} />
        <Route path="/shop-react-app/cart" element={<Cart />} />
        <Route path="/shop-react-app/product" element={<ProductCard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
