import { create } from "zustand";

export const useFiltersStore = create((set, get) => ({
  filteredList: [],
  searchQuery: "",
  selectedCategory: "",
  selectedPrice: { min: 200, max: 800 },
  selectedColors: [],
  selectedSizes: [],

  updateFilteredList: async () => {
    const response = await fetch(`http://localhost:3000/goods?q=${get().searchQuery}&category_like=${get().selectedCategory}&price_gte=${get().selectedPrice.min}&price_lte=${get().selectedPrice.max}`);
    const data = await response.json();
    set({ filteredList: data });
  },
}));
