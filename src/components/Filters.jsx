import filter from "/src/assets/filter.png";

const categories = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];
const colors = [
  "#00C12B",
  "#F50606",
  "#F5DD06",
  "#F57906",
  "#06CAF5",
  "#063AF5",
  "#7D06F5",
  "#F506A4",
  "#FFFFFF",
  "#000000",
];
const size = [
  "XX-Small",
  "X-Small",
  "Small",
  "Medium",
  "Large",
  "X-Large",
  "XX-Large",
  "3X-Large",
  "4X-Large",
];
const style = ["Casual", "Formal", "Party", "Gym"];

export const Filters = () => {
  return (
    <>
      <div className="max-w-[295px] border rounded-2xl border-gray-200 p-6 self-start">
        <div className="pb-6 flex justify-between items-center">
          <p className="font-bold text-xl">Filters</p>
          <span className="">
            <img src={filter} alt="Filters icon" />
          </span>
        </div>
        <div className="filters_item">
          <ul className="filters_list-item flex flex-col gap-3 w-full">
            {categories.map((el) => (
              <li>
                <a href={`#${el.toLowerCase().replace(" ", "-")}`}>{el}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="filters_item flex-col">
          <p className="filters_item-title mb-5 font-bold text-xl">Price</p>
          <input type="range" />
        </div>
        <div className="filters_item flex-col">
          <p className="filters_item-title mb-5 font-bold text-xl">Colors</p>
          <div className="filters_item-colors flex flex-wrap gap-[15px]">
            {colors.map((el) => (
              <label className={`bg-[${el}]`}>
                <input type="color" value={el} className="hidden" />
              </label>
            ))}
          </div>
        </div>
        <div className="filters_item flex-col">
          <p className="filters_item-title mb-5 font-bold text-xl">Size</p>
          <div className="filters_item-size flex flex-wrap gap-2">
            {size.map((el) => (
              <label>
                {el}
                <input type="checkbox" className="hidden" />
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
              <li>
                <a href={`#${el.toLowerCase().replace(" ", "-")}`}>{el}</a>
              </li>
            ))}
          </ul>
        </div>
        <button className="py-3.5 bg-black text-white w-full rounded-4xl text-sm mb-2">
          Apply Filter
        </button>
      </div>
    </>
  );
};
