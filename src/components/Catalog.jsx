import { Card } from "./Card";

const goods = [
  {
    image: "src/assets/t-shirt-1.jpg",
    title: "Gradient Graphic T-shirt",
    stars: "3.5",
    price: 145,
  },
  {
    image: "src/assets/t-shirt-2.jpg",
    title: "Polo with Tipping Details",
    stars: "4.5",
    price: 180,
  },
];

export const Catalog = () => {
  return (
    <>
      <div className="flex w-full flex-col">
        <div className="flex justify-between items-baseline w-full mb-4">
          <h1 className="font-[Satoshi-Bold] text-[32px]">Casual</h1>
          <div className="flex gap-3">
            <p>Showing 1-10 of 100 Products</p>
            <p>
              Sort by:
              <span className="font-[Satoshi-Medium]">Most Popular</span>
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-9">
          {goods.map((el) => (
            <Card
              image={el.image}
              title={el.title}
              stars={el.stars}
              price={el.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};
