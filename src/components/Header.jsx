import { PromoLine } from "./PromoLine";
import avatar from "/src/assets/avatar.png";
import logo from "/src/assets/logo.png";
import { Search } from "./Search";
import { Link, NavLink } from "react-router";
import { useFavoriteStore } from "./Store/FavoriteStore";
import { useCartStore } from "./Store/CartStore";

const navMenu = ["Shop", "On sale", "New arrival", "Brands"];

export const Header = () => {
  
  const favoriteCount = useFavoriteStore((state) => state.favoriteList.length);
  const cartCount = useCartStore(state => state.cart.length)

  return (
    <>
      <PromoLine />
      <div className="wrap">
        <header className="flex justify-between items-center gap-10 pb-6 pt-6 border-b border-gray-200">
          <Link to={"/shop-react-app/"}>
            <img src={logo} alt="shop.co logo" className="h-[22px]" />
          </Link>
          <nav className="flex gap-3">
            {navMenu.map((el) => (
              <NavLink
                key={el}
                to={`/shop-react-app/${el.toLowerCase().replace(" ", "-")}`}
                className={({ isActive }) =>
                  isActive ? "text-white bg-black rounded-xl p-2" : "p-2"
                }
              >
                {el}
              </NavLink>
            ))}
          </nav>
          <Search />
          <div className="flex gap-3.5">
            <Link to={"/shop-react-app/favorite"}>
              <svg
                className={`w-6 h-6 text-gray-800 dark:text-white ${
                  favoriteCount
                    ? "fill-red-700 hover:fill-red-400"
                    : "stroke-black hover:fill-gray-400"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                />
              </svg>
            </Link>
            <Link to={"/shop-react-app/cart"}>
              <svg
                className={`w-[24px] h-[24px] ${cartCount ? "fill-red-700 stroke-red-700 hover:fill-red-400 hover:stroke-red-400" : "fill-white stroke-black hover:fill-gray-400"}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  //stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                />
              </svg>
            </Link>
            <Link to={"/shop-react-app/auth"}>
              <img src={avatar} alt="Avatar" />
            </Link>
          </div>
        </header>
      </div>
    </>
  );
};
