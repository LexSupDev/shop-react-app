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

function App() {
  const [goods, setGoods] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
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
    fetch(`http://localhost:3000/goods`)
      .then((response) => response.json())
      .then((result) => {
        setProductList(result);
      })
      .catch((error) => console.log(error));
  }, []);

  const fetchFav = useFavoriteStore.getState().fetch
  useEffect(() => {
    fetchFav()
  }, []);


  return (
    <>
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Breadcrumbs />
      <Routes>
        <Route
          path="/shop-react-app/"
          element={
            <MainPage
              setSearchQuery={setSearchQuery}
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
