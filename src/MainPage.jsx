import { Filters } from "./components/Filters";
import { Catalog } from "./components/Catalog";

export const MainPage = ({ setSelectedCategory }) => {
  return (
    <>
      <div className="wrap flex gap-5 justify-between">
        <Filters setSelectedCategory={setSelectedCategory} />
        <Catalog />
      </div>
    </>
  );
};
