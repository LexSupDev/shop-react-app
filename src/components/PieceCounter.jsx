import { useCartStore } from "./Store/CartStore";

export const PieceCounter = ({id}) => {
  const cartStore = useCartStore(state => state.cart)
  const amount = cartStore.find(el => el.id === id)?.amount || 1

  return (
    <>
      <div className="flex items-center bg-gray-100 rounded-4xl h-[52px]">
        <button className="pl-[22px] pr-10 text-3xl cursor-pointer">-</button>
        <span className="mt-1 text-xl px-1">{amount}</span>
        <button className="pl-10 pr-[22px] text-3xl cursor-pointer">+</button>
      </div>
    </>
  );
};
