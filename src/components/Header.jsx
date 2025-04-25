import { PromoLine } from "./PromoLine";
import avatar from "/src/assets/avatar.png";
import trash from "/src/assets/trash.png";
import logo from "/src/assets/logo.png";
import { Search } from "./Search";

const navMenu = ["Shop", "On sale", "New arrival", "Brands"];

export const Header = ({ searchQuery, setSearchQuery, favoriteList }) => {
  return (
    <>
      <PromoLine />
      <div className="wrap">
        <header className="flex justify-between items-center gap-10 pb-6 pt-6 border-b border-gray-200">
          <img src={logo} alt="shop.co logo" className="h-[22px]" />
          <nav className="flex gap-6">
            {navMenu.map((el) => (
              <a href={`#${el.toLowerCase().replace(" ", "-")}`}>{el}</a>
            ))}
          </nav>
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <div className="flex gap-3.5">
            <button>
              {favoriteList.length ? (
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#000000"
                  viewBox="0 0 24 24"
                >
                  <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                  />
                </svg>
              )}
            </button>
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
