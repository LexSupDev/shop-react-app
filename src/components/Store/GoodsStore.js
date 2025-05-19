import { create } from "zustand";
import { useFiltersStore } from "./FiltersStore";

export const useGoodsStore = create((set) => ({
  goodsList: [],

  fetch: async () => {
    const response = await fetch("http://localhost:3000/goods");
    const data = await response.json();
    set({ goodsList: data });
    useFiltersStore.setState({ filteredList: data });
  },
}));
