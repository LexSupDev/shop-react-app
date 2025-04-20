import { PromoLine } from "./PromoLine";
import avatar from "/src/assets/avatar.png";
import trash from "/src/assets/trash.png";
import logo from "/src/assets/logo.png";
import { Search } from "./Search";

const navMenu = ["Shop", "On sale", "New arrival", "Brands"]

export const Header = ({searchQuery, setSearchQuery}) => {
  return (
    <>
      <PromoLine />
      <div className="wrap">
        <header className="flex justify-between items-center gap-10 pb-6 pt-6 border-b border-gray-200">
          <img
            src={logo}
            alt="shop.co logo"
            className="h-[22px]"
          />
          <nav className="flex gap-6">
            {navMenu.map((el) => <a href={`#${el.toLowerCase().replace(" ", "-")}`}>{el}</a>)}
          </nav>
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
          <div className="flex gap-3.5">
            <button>
              <img src={trash} alt="Trash" />
            </button>
            <button>
              <img src={avatar} alt="Avatar" />
            </button>
          </div>
        </header>
      </div>
    </>
  );
};
