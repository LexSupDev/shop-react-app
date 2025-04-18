import { PromoLine } from "./PromoLine";

export const Header = () => {
  return (
    <>
      <PromoLine />
      <div className="wrap">
        <header className="flex justify-between items-center gap-10 pb-6 pt-6 border-b border-gray-200">
          <img src="assets/logo.png" alt="shop.co logo" className="h-[22px]" />
          <nav className="flex gap-6">
            <a href="shop">Shop</a>
            <a href="on-sale">On sale</a>
            <a href="new-arrival">New arrival</a>
            <a href="brands">Brands</a>
          </nav>
          <div className="w-full max-w-[577px] relative">
            <input
              type="text"
              className="bg-[#F0F0F0] rounded-3xl w-full p-3 pl-[52px] relative"
              placeholder="Search for products..."
            />
            <span className="absolute bg-[url(assets/search.png)] bg-no-repeat w-[21px] left-4 top-3 text-transparent" aria-hidden="true">.</span>
          </div>
          <div className="flex gap-3.5">
            <button>
              <img src="assets/trash.png" alt="Trash" />
            </button>
            <button>
              <img src="assets/avatar.png" alt="Avatar" />
            </button>
          </div>
        </header>
      </div>
    </>
  );
};
