import { PromoLine } from "./PromoLine";

export const Header = () => {
  return (
    <>
      <PromoLine />
      <div className="wrap">
        <header className="flex justify-between gap-10 pb-6 pt-6 border-b border-gray-200">
          <img src="assets/logo.png" alt="shop.co logo" />
          <nav className="flex gap-6">
            <a href="shop">Shop</a>
            <a href="on-sale">On sale</a>
            <a href="new-arrival">New arrival</a>
            <a href="brands">Brands</a>
          </nav>
          <div className="">
            <input type="text" className="bg-[#F0F0F0] rounded-xl mx-auto"/>
          </div>
          <div className="flex gap-3.5">
            <button><img src="assets/trash.png" alt="Trash" /></button>
            <button><img src="assets/avatar.png" alt="Avatar" /></button>
          </div>
        </header>
      </div>
    </>
  );
};
