import { PieceCounter } from "./components/PieceCounter";
import { StarRating } from "./components/StarRating";

export const ProductCard = () => {
  return (
    <>
      <div className="wrap">
        <div className="flex gap-10">
          <div className="grid col-auto row-auto grid-flow-col-dense gap-3.5 ">
            <img
            className="rounded-2xl last:row-span-3"
              src="https://placeholdmon.vercel.app/152x167?text=Classic+White+T-Shirt"
              alt=""
            />
            <img
            className="rounded-2xl last:row-span-3"
              src="https://placeholdmon.vercel.app/152x167?text=Classic+White+T-Shirt"
              alt=""
            />
            <img
            className="rounded-2xl last:row-span-3"
              src="https://placeholdmon.vercel.app/152x167?text=Classic+White+T-Shirt"
              alt=""
            />
            <img className="rounded-2xl last:row-span-3"
              src="https://placeholdmon.vercel.app/444x530?text=Classic+White+T-Shirt"
              alt=""
            />
          </div>
          <div className="">
            <div className="pb-5 border-b-1 border-gray-200 mt-6 first:mt-0 last:border-none">
              <h3 className="font-[Integral-CF-Bold] text-[39px]">One Life Graphic T-shirt</h3>
              <div className="mb-2 flex flex-row gap-3 items-start">
                <StarRating rating={5} />
                <span className="text-sm">
                  {5}/<span className="opacity-50">5</span>
                </span>
              </div>
              <p className="font-[Satoshi-Bold] text-[32px] mb-2">$260</p>
              <p className="opacity-60">
                This graphic t-shirt which is perfect for any occasion. Crafted
                from a soft and breathable fabric, it offers superior comfort
                and style.
              </p>
            </div>
              <div className="pb-5 border-b-1 border-gray-200 mt-6 first:mt-0 last:border-none">
                <p className="opacity-60 mb-4">Select Colors</p>
                <div className="flex gap-4">
                  <label className="rounded-full w-[37px] h-[37px] bg-amber-300">
                    <input type="checkbox" className="hidden"/>
                  </label>
                  <label className="rounded-full w-[37px] h-[37px] bg-indigo-700">
                    <input type="checkbox" className="hidden"/>
                  </label>
                  <label className="rounded-full w-[37px] h-[37px] bg-sky-600">
                    <input type="checkbox" className="hidden"/>
                  </label>
                </div>
              </div>
              <div className="pb-5 border-b-1 border-gray-200 mt-6 first:mt-0 last:border-none">
                <p className="opacity-60 mt-4">Choose Size</p>
                <div className="">
                  <label>
                    <input type="checkbox" className="hidden"/>
                  </label>
                  <label>
                    <input type="checkbox" className="hidden"/>
                  </label>
                  <label>
                    <input type="checkbox" className="hidden"/>
                  </label>
                  <label>
                    <input type="checkbox" className="hidden"/>
                  </label>
                </div>
              </div>
              <div className="pb-5 border-b-1 border-gray-200 mt-6 first:mt-0 last:border-none">
                <PieceCounter />
                <button>Add to Cart</button>
              </div>
            
          </div>
        </div>
      </div>
    </>
  );
};
