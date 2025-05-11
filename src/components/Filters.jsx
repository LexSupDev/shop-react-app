import filter from "/src/assets/filter.png";
import RangeSlider from "./RangeSlider";
import { useGoodsStore } from "./Store/GoodsStore";
import { useFiltersStore } from "./Store/FiltersStore";

export const Filters = () => {
  const goodsList = useGoodsStore((state) => state.goodsList);
  const filteredList = useFiltersStore((state) => state.filteredList);
  const selectedCategory = useFiltersStore((state) => state.selectedCategory);
  const handleColor = useFiltersStore(state => state.handleColor)
  const handleSize = useFiltersStore(state => state.handleSize)

  const categories = [...new Set(goodsList.map((el) => el.category))];
  const colors = [...new Set(filteredList.flatMap((el) => el.colors))];
  const sizeOrder = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "2X-Large",
    "3X-Large",
    "4X-Large",
  ];
  const size = [...new Set(filteredList.flatMap((el) => el.size))].sort(
    (a, b) => sizeOrder.indexOf(a) - sizeOrder.indexOf(b)
  );
  const style = ["Casual", "Formal", "Party", "Gym"];

  return (
    <>
      <div className="sm:max-w-[295px] sm:min-w-[295px] border rounded-2xl border-gray-200 p-6 self-start">
        <div className="pb-6 flex justify-between items-center">
          <p className="font-bold text-xl">Filters</p>
          <span className="">
            <img src={filter} alt="Filters icon" />
          </span>
        </div>
        <div className="filters_item">
          <ul className="filters_list-item flex flex-col gap-3 w-full">
            {categories.map((el) => (
              <li key={el}>
                <a
                  className={`${
                    selectedCategory === el ? "border-b-1 border-gray-400" : ""
                  } relative block after:absolute after:content-['.'] after:text-transparent after:block after:w-[12px] after:bg-[url('/src/assets/arrow-right.png')] after:bg-no-repeat after:right-0 after:top-1.5`}
                  href={`#${el.toLowerCase().replace(" ", "-")}`}
                  onClick={() =>
                    useFiltersStore.setState({ selectedCategory: el })
                  }
                >
                  {el}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="filters_item flex-col">
          <p className="filters_item-title mb-5 font-bold text-xl">Price</p>
          <RangeSlider />
        </div>
        <div className="filters_item flex-col">
          <p className="filters_item-title mb-5 font-bold text-xl">Colors</p>
          <div className="filters_item-colors flex flex-wrap gap-[15px]">
            {colors.map((el) => (
              <label
                key={el}
                style={{ backgroundColor: el }}
                className="rounded-[100%] w-[37px] h-[37px] border border-black/10 hasChecked-after hasChecked-before has-[:checked]:after:w-[13px] has-[:checked]:after:bg-[url('/src/assets/check.svg')] has-[:checked]:after:bg-no-repeat has-[:checked]:after:right-[11px] has-[:checked]:after:top-[13px] has-[:checked]:before:bg-black/10 has-[:checked]:before:w-full has-[:checked]:before:h-full has-[:checked]:before:rounded-full"
                /*{`$//selectedColor === el ? "border-black" : "border-transparent"}`}*/
              >
                
                <input type="checkbox" onClick={() => handleColor(el)} className="hidden" />
              </label>
            ))}
          </div>
        </div>
        <div className="filters_item flex-col">
          <p className="filters_item-title mb-5 font-bold text-xl">Size</p>
          <div className="filters_item-size flex flex-wrap gap-2">
            {size.map((el) => (
              <label
                key={el}
                className="text-sm rounded-4xl px-5 py-2.5 bg-gray-100 has-[:checked]:bg-black has-[:checked]:text-white"
              >
                {el}
                <input type="checkbox" onClick={() => handleSize(el)} className="hidden" />
              </label>
            ))}
          </div>
        </div>
        <div className="filters_item flex-col">
          <p className="filters_item-title mb-5 font-bold text-xl">
            Dress Style
          </p>
          <ul className="filters_list-item flex flex-col gap-3 w-full">
            {style.map((el) => (
              <li key={el}>
                <a href={`#${el.toLowerCase().replace(" ", "-")}`}>{el}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
