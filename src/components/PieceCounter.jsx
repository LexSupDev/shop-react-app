
export const PieceCounter = ({count, onChange}) => {
  const increment = () => onChange(count + 1);
  const decrement = () => !count || onChange(count - 1)

  return (
    <>
      <div className="flex items-center bg-gray-100 rounded-4xl h-[52px]">
        <button onClick={decrement} className="pl-[21px] pr-7 text-3xl cursor-pointer">-</button>
        <label className="mt-1 text-xl w-10"><input type="text" onChange={e =>onChange(+e.target.value)} value={count} className="w-full text-center"/></label>
        <button onClick={increment} className="pl-7 pr-[21px] text-3xl cursor-pointer">+</button>
      </div>
    </>
  );
};
