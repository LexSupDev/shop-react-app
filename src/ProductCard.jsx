import { PieceCounter } from "./components/PieceCounter";
import { StarRating } from "./components/StarRating";

export const ProductCard = () => {
  return (
    <>
      <div className="wrap">
        <div className="flex gap-10 mb-10">
          <div className="grid col-auto row-auto grid-flow-col-dense gap-3.5 self-start">
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
            <img
              className="rounded-2xl last:row-span-3"
              src="https://placeholdmon.vercel.app/444x530?text=Classic+White+T-Shirt"
              alt=""
            />
          </div>
          <div className="">
            <div className="pb-[21px] border-b-1 border-gray-200 mt-5.5 first:mt-0 last:border-none last:pb-0">
              <h3 className="font-[Integral-CF-Bold] text-[39px]">
                One Life Graphic T-shirt
              </h3>
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
            <div className="pb-[21px] border-b-1 border-gray-200 mt-5.5 first:mt-0 last:border-none last:pb-0">
              <p className="opacity-60 mb-4">Select Colors</p>
              <div className="flex gap-4">
                <label className="rounded-full w-[37px] h-[37px] bg-amber-300 has-[:checked]:relative has-[:checked]:after:absolute has-[:checked]:after:content-['1'] has-[:checked]:after:text-transparent has-[:checked]:after:block has-[:checked]:after:w-[13px] has-[:checked]:after:bg-[url('/src/assets/check.svg')] has-[:checked]:after:bg-no-repeat has-[:checked]:after:right-[12px] has-[:checked]:after:top-[13px]">
                  <input type="checkbox" className="hidden" />
                </label>
                <label className="rounded-full w-[37px] h-[37px] bg-indigo-700 has-[:checked]:relative has-[:checked]:after:absolute has-[:checked]:after:content-['1'] has-[:checked]:after:text-transparent has-[:checked]:after:block has-[:checked]:after:w-[13px] has-[:checked]:after:bg-[url('/src/assets/check.svg')] has-[:checked]:after:bg-no-repeat has-[:checked]:after:right-[12px] has-[:checked]:after:top-[13px]">
                  <input type="checkbox" className="hidden" />
                </label>
                <label className="rounded-full w-[37px] h-[37px] bg-sky-600 has-[:checked]:relative has-[:checked]:after:absolute has-[:checked]:after:content-['1'] has-[:checked]:after:text-transparent has-[:checked]:after:block has-[:checked]:after:w-[13px] has-[:checked]:after:bg-[url('/src/assets/check.svg')] has-[:checked]:after:bg-no-repeat has-[:checked]:after:right-[12px] has-[:checked]:after:top-[13px]">
                  <input type="checkbox" className="hidden" />
                </label>
              </div>
            </div>
            <div className="pb-[21px] border-b-1 border-gray-200 mt-5.5 first:mt-0 last:border-none last:pb-0">
              <p className="opacity-60 mb-4">Choose Size</p>
              <div className="flex gap-4">
                <label className="text-sm rounded-4xl px-5 py-2.5 bg-gray-100 has-[:checked]:bg-black has-[:checked]:text-white">
                  Small
                  <input type="checkbox" className="hidden" />
                </label>
                <label className="text-sm rounded-4xl px-5 py-2.5 bg-gray-100 has-[:checked]:bg-black has-[:checked]:text-white">
                  Medium
                  <input type="checkbox" className="hidden" />
                </label>
                <label className="text-sm rounded-4xl px-5 py-2.5 bg-gray-100 has-[:checked]:bg-black has-[:checked]:text-white">
                  Large
                  <input type="checkbox" className="hidden" />
                </label>
                <label className="text-sm rounded-4xl px-5 py-2.5 bg-gray-100 has-[:checked]:bg-black has-[:checked]:text-white">
                  X-Large
                  <input type="checkbox" className="hidden" />
                </label>
              </div>
            </div>
            <div className="pb-[21px] border-b-1 border-gray-200 mt-[21px] first:mt-0 last:border-none last:pb-0 flex gap-5">
              <div className="flex items-center bg-gray-100 rounded-4xl">
                <button className="pl-[22px] pr-10 text-3xl cursor-pointer">
                  -
                </button>
                <span className="mt-1 text-xl px-1">1</span>
                <button className="pl-10 pr-[22px] text-3xl cursor-pointer">
                  +
                </button>
              </div>
              <button className="m-auto bg-black text-white font-[Satoshi-Medium] w-full rounded-full py-[14px]">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
