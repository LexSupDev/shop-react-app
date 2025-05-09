import { Filters } from "../Filters";
import { Catalog } from "../Catalog";

export const MainPage = () => {
  return (
    <>
      <div className="wrap flex gap-5 justify-between">
        <Filters />
        <Catalog />
      </div>
    </>
  );
};
