import { PromoLine } from "./PromoLine";
import avatar from "/src/assets/avatar.png";
import cart from "/src/assets/cart.png";
import logo from "/src/assets/logo.png";
import { Search } from "./Search";
import { Link, NavLink } from "react-router";
import { useFavoriteStore } from "./FavoriteStore";

const navMenu = ["Shop", "On sale", "New arrival", "Brands"];

export const Header = ({ searchQuery, setSearchQuery }) => {
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
                to={`/shop-react-app/${el.toLowerCase().replace(" ", "-")}`}
                className={({ isActive }) =>
                  isActive ? "text-white bg-black rounded-xl p-2" : "p-2"
                }
              >
                {el}
              </NavLink>
            ))}
          </nav>
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <div className="flex gap-3.5">
            <Link to={"/shop-react-app/favorite"}>
              <svg
                className={`w-6 h-6 text-gray-800 dark:text-white ${useFavoriteStore.getState().favoriteList.length ? "fill-red-700" : "stroke-black hover:fill-gray-400"}`}
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
            <Link to={"/shop-react-app/cart"} className="">
              <img src={cart} alt="Trash" className=""/>
            </Link>
            <Link to={"/shop-react-app/auth"}>
              <img src={avatar} alt="Avatar"/>
            </Link>
          </div>
        </header>
      </div>
    </>
  );
};
