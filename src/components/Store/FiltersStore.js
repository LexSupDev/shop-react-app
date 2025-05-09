import { create } from "zustand";

export const useFiltersStore = create((set, get) => ({
  filteredList: [],
  searchQuery: "",
  selectedCategory: "",
  selectedPrice: { min: 0, max: 0 },
  selectedColors: [],
  selectedSizes: [],

  updateFilteredList: async () => {
    const response = await fetch(`http://localhost:3000/goods?q=${get().searchQuery}&category=${get().selectedCategory}`);
    const data = await response.json();
    set({ filteredList: data });
    console.log(get().filteredList)
  },
}));
