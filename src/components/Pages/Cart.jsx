import { PieceCounter } from "../PieceCounter";
import trash from "/src/assets/trash.svg";

export const Cart = () => {
  return (
    <>
      <>
        <div className="wrap">
          <h2 className="uppercase font-[Integral-CF-Bold] text-[40px] leading-none mb-6">
            Your Cart
          </h2>
          <div className="flex gap-5">
            <div className="w-full border border-gray-200 rounded-2xl py-5 px-6 self-start">
              <div className="flex flex-row border-b-1 border-gray-200 last:border-none last:pb-0 pb-6 mt-6 first:mt-0 gap-4">
                <img
                  src="src/assets/t-shirt-1.jpg"
                  alt=""
                  className="w-31 h-31"
                />
                <div className="flex justify-between w-full">
                  <div className="flex flex-col justify-between">
                    <h3 className="text-xl font-[Satoshi-Bold]">
                      Gradient Graphic T-shirt
                    </h3>
                    <div className="mt-[-20px]">
                      <p className="text-sm">
                        Size: <span className="text-gray-400">Large</span>
                      </p>
                      <p className="text-sm">
                        Color: <span className="text-gray-400">White</span>
                      </p>
                    </div>
                    <span className="text-2xl font-[Satoshi-Bold]">$145</span>
                  </div>
                  <div className="flex flex-col items-end justify-between ">
                    <img src={trash} alt="" />
                    <PieceCounter />
                  </div>
                </div>
              </div>
              <div className="flex flex-row border-b-1 border-gray-200 last:border-none last:pb-0 pb-6 mt-6 first:mt-0 gap-4">
                <img
                  src="src/assets/t-shirt-1.jpg"
                  alt=""
                  className="w-31 h-31"
                />
                <div className="flex justify-between w-full">
                  <div className="flex flex-col justify-between">
                    <h3 className="text-xl font-[Satoshi-Bold]">
                      Gradient Graphic T-shirt
                    </h3>
                    <div className="mt-[-20px]">
                      <p className="text-sm">
                        Size: <span className="text-gray-400">Large</span>
                      </p>
                      <p className="text-sm">
                        Color: <span className="text-gray-400">White</span>
                      </p>
                    </div>
                    <span className="text-2xl font-[Satoshi-Bold]">$145</span>
                  </div>
                  <div className="flex flex-col items-end justify-between ">
                    <img src={trash} alt="" />
                    <PieceCounter />
                  </div>
                </div>
              </div>
              <div className="flex flex-row border-b-1 border-gray-200 last:border-none last:pb-0 pb-6 mt-6 first:mt-0 gap-4">
                <img
                  src="src/assets/t-shirt-1.jpg"
                  alt=""
                  className="w-31 h-31"
                />
                <div className="flex justify-between w-full">
                  <div className="flex flex-col justify-between">
                    <h3 className="text-xl font-[Satoshi-Bold]">
                      Gradient Graphic T-shirt
                    </h3>
                    <div className="mt-[-20px]">
                      <p className="text-sm">
                        Size: <span className="text-gray-400">Large</span>
                      </p>
                      <p className="text-sm">
                        Color: <span className="text-gray-400">White</span>
                      </p>
                    </div>
                    <span className="text-2xl font-[Satoshi-Bold]">$145</span>
                  </div>
                  <div className="flex flex-col items-end justify-between ">
                    <img src={trash} alt="" />
                    <PieceCounter />
                  </div>
                </div>
              </div>
            </div>
            <div className="min-w-[505px] self-start border border-gray-200 rounded-2xl py-5 px-6 flex flex-col gap-4">
              <p className="font-[Satoshi-Bold] text-2xl">Order Summary</p>
              <div className="w-full text-xl">
                <div className="flex flex-col gap-4 pb-4 border-b-1 border-gray-200 mb-4">
                  <div className="flex justify-between">
                    <p className="opacity-60 ">Subtotal</p>
                    <span className="font-[Satoshi-Bold]">$565</span>
                  </div>
                  <div className="flex justify-between">
                    <p className="opacity-60">Discount (-20%)</p>
                    <span className="text-[#FF3333] font-[Satoshi-Bold]">-$113</span>
                  </div>
                  <div className="flex justify-between">
                    <p className="opacity-60 ">Delivery Fee</p>
                    <span className="font-[Satoshi-Bold]">$15</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <p>Total</p>
                  <span className="text-2xl font-[Satoshi-Bold]">$467</span>
                </div>
              </div>
              <div className="w-full flex justify-between gap-3">
                <label className="w-full relative before:absolute before:w-6 before:h-6 before:block before:bg-[url('src/assets/tag.png')] before:bg-no-repeat before:top-[calc(50%-10px)] before:left-4">
                  <input type="text" className="bg-[#F0F0F0] rounded-full pl-12 py-3 w-full" placeholder="Add promo code"></input>
                </label>
                <button className="px-10 py-3 rounded-full bg-black dark:text-white">Apply</button>
              </div>
              <button className="w-full bg-black rounded-full py-4.5 dark:text-white relative before:absolute before:w-6 before:h-6 before:block before:bg-[url('src/assets/arrow-full-right.png')] before:bg-no-repeat before:top-[calc(50%-7px)] before:right-[30%]">Go to Checkout</button>
            </div>
          </div>
        </div>
      </>
    </>
  );
};
