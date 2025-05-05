import { FavoriteIcon } from "./FavoriteIcon";
import { StarRating } from "./StarRating";

export const Card = ({
  product,
  favoriteList,
  setFavoriteList,
}) => {
  const {image, title, id, stars, price, category} = product
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
          <p className="opacity-60 pb-1.5">{category}</p>
          <FavoriteIcon
            favoriteList={favoriteList}
            setFavoriteList={setFavoriteList}
            id={id}
            product={product}
          />
        </div>
        <div className="mb-2 flex flex-row gap-3 items-start">
          <StarRating rating={stars} />
          <span className="text-sm">
            {stars}/<span className="opacity-50">5</span>
          </span>
        </div>
        <span className="font-[Satoshi-Bold] text-2xl">${price}</span>
      </div>
    </>
  );
};
