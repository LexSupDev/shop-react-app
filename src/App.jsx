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

function App() {
  const [goods, setGoods] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [favoriteList, setFavoriteList] = useState([]);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:3000/goods?q=${searchQuery}&category_like=${selectedCategory}`
    )
      .then((response) => response.json())
      .then((result) => {
        setGoods(result);
      })
      .catch((error) => console.log(error));
  }, [searchQuery, selectedCategory]);

  useEffect(() => {
    fetch(
      `http://localhost:3000/goods`
    )
      .then((response) => response.json())
      .then((result) => {
        setProductList(result);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch(
      `http://localhost:3000/favorites`
    )
      .then((response) => response.json())
      .then((result) => {
        setFavoriteList(result);
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
              setSearchQuery={setSearchQuery}
              favoriteList={favoriteList}
              goods={goods}
              productList={productList}
              setSelectedCategory={setSelectedCategory}
            />
          }
        />
        <Route
          path="/shop-react-app/favorite"
          element={
            <FavoritePage
              favoriteList={favoriteList}
              productList={productList}
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
