import { useCartStore } from "./Store/CartStore";
import { usePieceCounterStore } from "./Store/PieceCounter";

export const PieceCounter = ({id}) => {
  // const cartStore = useCartStore(state => state.cart)
  // const amount = cartStore.find(el => el.id === id)?.amount || useCartStore.getState().amount
  const {count, increaseCounter, decreaseCounter} = usePieceCounterStore()

  return (
    <>
      <div className="flex items-center bg-gray-100 rounded-4xl h-[52px]">
        <button onClick={decreaseCounter} className="pl-[21px] pr-7 text-3xl cursor-pointer">-</button>
        <label className="mt-1 text-xl w-10"><input type="text" onChange={e => usePieceCounterStore.setState({count: +e.target.value})} value={count} className="w-full text-center"/></label>
        <button onClick={increaseCounter} className="pl-7 pr-[21px] text-3xl cursor-pointer">+</button>
      </div>
    </>
  );
};
