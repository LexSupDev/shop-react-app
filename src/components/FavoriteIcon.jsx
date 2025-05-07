export const FavoriteIcon = ({ favoriteList, product, getFavorits }) => {
  const handleFavorites = (product) => {
    favoriteList.some((el) => el.id === product.id)
      ? fetch(`http://localhost:3000/favorites/${product.id}`, {
          method: "DELETE",
        }).then(() => getFavorits())
      : fetch(`http://localhost:3000/favorites`, {
          method: "POST",
          body: JSON.stringify(product),
          headers: {
            "Content-Type": "application/json",
          },
        }).then(() => getFavorits());
  };

  return (
    <>
      <span
        className="absolute top-0.5 right-0"
        onClick={() => handleFavorites(product)}
      >
        <svg
          className={`w-6 h-6 text-gray-800 dark:text-white ${
            favoriteList.flatMap((el) => el.id).includes(product.id)
              ? "fill-red-700"
              : "stroke-black hover:fill-gray-400"
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
          />
        </svg>
      </span>
    </>
  );
};
