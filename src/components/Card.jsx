

export const Card = ({image, title, stars, price}) => {
  return (
    <>
      <div className="flex flex-col">
        <img className="w-[295px] h-[295px] mb-4" src={image} alt="t-shirt-1" />
        <h3 className="font-[Satoshi-Bold] text-xl mb-2">{title}</h3>
        <div className="mb-2">
          <span>*</span>
          <span className="text-sm">{stars}/5</span>
        </div>
        <span className="font-[Satoshi-Bold] text-2xl">${price}</span>
      </div>
    </>
  );
};
