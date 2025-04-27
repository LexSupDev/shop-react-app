export const PieceCounter = () => {
  return (
    <>
      <div className="flex items-center gap-5 bg-gray-100 rounded-4xl px-6 pt-1 pb-2">
        <button className="text-3xl cursor-pointer">-</button>
        <span className="mt-1 text-xl">1</span>
        <button className="text-3xl cursor-pointer">+</button>
      </div>
    </>
  );
};
