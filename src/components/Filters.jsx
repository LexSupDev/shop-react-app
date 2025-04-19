import filter from "/src/assets/filter.png";

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
            <li>
              <a href="#t-shirts">T-shirts</a>
            </li>
            <li>
              <a href="#shorts">Shorts</a>
            </li>
            <li>
              <a href="#shirts">Shirts</a>
            </li>
            <li>
              <a href="#hoodie">Hoodie</a>
            </li>
            <li>
              <a href="#jeans">Jeans</a>
            </li>
          </ul>
        </div>
        <div className="filters_item flex-col">
          <p className="filters_item-title mb-5 font-bold text-xl">Price</p>
          <input type="range" />
        </div>
        <div className="filters_item flex-col">
          <p className="filters_item-title mb-5 font-bold text-xl">Colors</p>
          <div className="filters_item-colors flex flex-wrap gap-[15px]">
            <label className="bg-[#00C12B]">
              <input type="color" value="#00C12B" className="hidden" />
            </label>
            <label className="bg-[#F50606]">
              <input type="color" value="#F50606" className="hidden" />
            </label>
            <label className="bg-[#F5DD06]">
              <input type="color" value="#F5DD06" className="hidden" />
            </label>
            <label className="bg-[#F57906]">
              <input type="color" value="#F57906" className="hidden" />
            </label>
            <label className="bg-[#06CAF5]">
              <input type="color" value="#06CAF5" className="hidden" />
            </label>
            <label className="bg-[#063AF5]">
              <input type="color" value="#063AF5" className="hidden" />
            </label>
            <label className="bg-[#7D06F5]">
              <input type="color" value="#7D06F5" className="hidden" />
            </label>
            <label className="bg-[#F506A4]">
              <input type="color" value="#F506A4" className="hidden" />
            </label>
            <label className="bg-[#FFFFFF]">
              <input type="color" value="#FFFFFF" className="hidden" />
            </label>
            <label className="bg-[#000000]">
              <input type="color" value="#000000" className="hidden" />
            </label>
          </div>
        </div>
        <div className="filters_item flex-col">
          <p className="filters_item-title mb-5 font-bold text-xl">Size</p>
          <div className="filters_item-size flex flex-wrap gap-2">
            <label>XX-Small
              <input type="checkbox" className="hidden"/>
            </label>
            <label>X-Small
              <input type="checkbox" className="hidden"/>
            </label>
            <label>Small
              <input type="checkbox" className="hidden"/>
            </label>
            <label>Medium
              <input type="checkbox" className="hidden"/>
            </label>
            <label className="bg-black text-white">Large
              <input type="checkbox" className="hidden"/>
            </label>
            <label>X-Large
              <input type="checkbox" className="hidden"/>
            </label>
            <label>XX-Large
              <input type="checkbox" className="hidden"/>
            </label>
            <label>3X-Large
              <input type="checkbox" className="hidden"/>
            </label>
            <label>4X-Large
              <input type="checkbox" className="hidden"/>
            </label>
          </div>
        </div>
        <div className="filters_item flex-col">
          <p className="filters_item-title mb-5 font-bold text-xl">
            Dress Style
          </p>
          <ul className="filters_list-item flex flex-col gap-3 w-full">
            <li>
              <a href="#casual">Casual</a>
            </li>
            <li>
              <a href="#formal">Formal</a>
            </li>
            <li>
              <a href="#party">Party</a>
            </li>
            <li>
              <a href="#gtm">Gym</a>
            </li>
          </ul>
        </div>
        <button className="py-3.5 bg-black text-white w-full rounded-4xl text-sm mb-2">Apply Filter</button>
      </div>
    </>
  );
};
