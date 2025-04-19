import tshirt1 from "/src/assets/t-shirt-1.jpg";

export const Card = () => {
  return (
    <>
      <div className="flex flex-col">
        <img className="w-[295px] h-[295px] mb-4" src={tshirt1} alt="t-shirt-1" />
        <h3 className="font-[Satoshi-Bold] text-xl mb-2">Gradient Graphic T-shirt</h3>
        <div className="mb-2">
          <span>*</span>
          <span className="text-sm">3.5/5</span>
        </div>
        <span className="font-[Satoshi-Bold] text-2xl">$145</span>
      </div>
    </>
  );
};
