import { useEffect} from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import { MainPage } from "./components/Pages/MainPage";
import { FavoritePage } from "./components/Pages/FavoritePage";
import { Header } from "./components/Header";
import { Breadcrumbs } from "./components/Breadcrumbs";
import { Cart } from "./components/Pages/CartPage";
import { ProductCard } from "./components/Pages/ProductCard";
import { Footer } from "./components/Footer";
import { useFavoriteStore } from "./components/Store/FavoriteStore";
import { useGoodsStore } from "./components/Store/GoodsStore";
import { useCartStore } from "./components/Store/CartStore";

function App() {

  useEffect(() => {
    useGoodsStore.getState().fetch();
    useCartStore.getState().fetch();
    useFavoriteStore.getState().fetch();
  }, []);

  return (
    <>
      <Header />
      <Breadcrumbs />
      <Routes>
        <Route path="/shop-react-app/" element={<MainPage />} />
        <Route path="/shop-react-app/favorite" element={<FavoritePage />} />
        <Route path="/shop-react-app/cart" element={<Cart />} />
        <Route path="/shop-react-app/product/:id" element={<ProductCard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
