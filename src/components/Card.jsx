import { StartRating } from "./StarRating";

export const Card = ({ id,image, title, stars, price, handleFavorites, favoriteList }) => {
  return (
    <>
      <div className="flex flex-col">
        <img
          className="w-[295px] h-[295px] mb-4 rounded-2xl"
          src={image}
          alt={title}
        />
        <div className="relative">
          <h3 className="font-[Satoshi-Bold] text-xl mb-2">{title}</h3>
          <span className="absolute top-0.5 right-0" onClick={() => handleFavorites(id)}>
            {favoriteList.includes(id) ? <svg
              className="w-6 h-6 text-gray-800 dark:text-white fill-black"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
              />
            </svg>: <svg
              className="w-6 h-6 text-gray-800 dark:text-white hover:fill-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
              />
            </svg>}
            
          </span>
        </div>
        <div className="mb-2 flex flex-row gap-3 items-start">
          <StartRating rating={stars}/>
          <span className="text-sm">{stars}/<span className="opacity-50">5</span></span>
        </div>
        <span className="font-[Satoshi-Bold] text-2xl">${price}</span>
      </div>
    </>
  );
};
