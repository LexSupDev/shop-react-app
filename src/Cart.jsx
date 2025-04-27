import { PieceCounter } from "./components/PieceCounter";
import trash from "/src/assets/trash.svg";

export const Cart = () => {
  return (
    <>
      <>
        <div className="wrap">
          <h2 className="uppercase font-[Integral-CF-Bold] text-[40px] leading-none mb-6">
            Your Favorites
          </h2>
          <div className="w-full border border-gray-200 rounded-2xl py-5 px-6">
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
                <div className="flex flex-col items-end justify-between">
                  <img src={trash} alt="" />
                  <PieceCounter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};
