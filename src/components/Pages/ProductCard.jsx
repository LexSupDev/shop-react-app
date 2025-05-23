import { useParams } from "react-router";
import { StarRating } from "../StarRating";
import { useProductCardStore } from "../Store/ProductCardStore";
import { useCartStore } from "../Store/CartStore";
import { useEffect, useState } from "react";
import { PieceCounter } from "../PieceCounter";

export const ProductCard = () => {
  const [count, setCount] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    useProductCardStore.getState().fetch(id);
  }, [id]);

  const { title, stars, price, category, colors, size, image } = useProductCardStore(state => state.product);

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
              className="rounded-2xl last:row-span-3 w-[444px] h-[530px]" 
              src={`../${image}`}
              alt=""
            />
          </div>
          <div className="">
            <div className="pb-5 border-b-1 border-gray-200 mt-5 first:mt-0 last:border-none last:pb-0">
              <h3 className="font-[Integral-CF-Bold] text-[39px]">{title}</h3>
              <div className="my-2 flex flex-row gap-3 items-center">
                <StarRating rating={stars} />
                <span className="text-sm">
                  {stars}/<span className="opacity-50">5</span>
                </span>
                <span className="opacity-60">{category}</span>
              </div>
              <p className="font-[Satoshi-Bold] text-[32px] mb-2">{price}</p>
              <p className="opacity-60">
                This graphic t-shirt which is perfect for any occasion. Crafted
                from a soft and breathable fabric, it offers superior comfort
                and style.
              </p>
            </div>
            <div className="pb-5 border-b-1 border-gray-200 mt-5 first:mt-0 last:border-none last:pb-0">
              <p className="opacity-60 mb-4">Select Colors</p>
              <div className="flex gap-4">
                {colors?.map((el) => (
                  <label
                    key={el}
                    style={{ background: el }}
                    className="rounded-full w-[37px] h-[37px] border border-black/10 hasChecked-after hasChecked-before has-[:checked]:after:w-[13px] has-[:checked]:after:bg-[url('/src/assets/check.svg')] has-[:checked]:after:bg-no-repeat has-[:checked]:after:right-[11px] has-[:checked]:after:top-[13px] has-[:checked]:before:bg-black/10 has-[:checked]:before:w-full has-[:checked]:before:h-full has-[:checked]:before:rounded-full"
                  >
                    <input
                      onChange={() =>
                        useProductCardStore.setState({ selectedColor: el })
                      }
                      type="radio"
                      name="colorButton"
                      className="hidden"
                    />
                  </label>
                ))}
              </div>
            </div>
            <div className="pb-5 border-b-1 border-gray-200 mt-5 first:mt-0 last:border-none last:pb-0">
              <p className="opacity-60 mb-4">Choose Size</p>
              <div className="flex gap-4 flex-wrap">
                {size?.map((el) => (
                  <label
                    key={el}
                    className="text-sm rounded-4xl px-5 py-2.5 bg-gray-100 has-[:checked]:bg-black has-[:checked]:text-white"
                  >
                    {el}
                    <input
                      onChange={() =>
                        useProductCardStore.setState({ selectedSize: el })
                      }
                      type="radio"
                      name="sizeButton"
                      className="hidden"
                    />
                  </label>
                ))}
              </div>
            </div>
            <div className="pb-5 border-b-1 border-gray-200 mt-5 first:mt-0 last:border-none last:pb-0 flex gap-5 justify-between">
            <PieceCounter count={count} onChange={setCount} />
              <button
                onClick={() =>
                  useCartStore.getState().addCartItem({
                    goodsId: id,
                    size: useProductCardStore.getState().selectedSize,
                    color: useProductCardStore.getState().selectedColor,
                    quantity: count,
                  })
                }
                className="m-auto bg-black text-white font-[Satoshi-Medium] w-full rounded-full py-[14px] cursor-pointer"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
