import { create } from "zustand";

export const useFiltersStore = create((set, get) => ({
  filteredList: [],
  searchQuery: "",
  selectedCategory: "",
  selectedPrice: { min: 50, max: 200 },
  selectedColors: [],
  selectedSizes: [],

  updateFilteredList: async () => {
    const response = await fetch(
      `http://localhost:3000/goods?q=${get().searchQuery}&category_like=${
        get().selectedCategory
      }&price_gte=${get().selectedPrice.min}&price_lte=${
        get().selectedPrice.max
      }`
    );
    const data = await response.json();
    set({ filteredList: data });
  },

  handleColor: (color) => {
    get().selectedColors.includes(color)
      ? set({
          selectedColors: get().selectedColors.filter((el) => el !== color),
        })
      : set({ selectedColors: [...get().selectedColors, color] });
  },

  handleSize: (size) => {
    get().selectedSizes.includes(size)
      ? set({
          selectedSizes: get().selectedSizes.filter((el) => el !== size),
        })
      : set({ selectedSizes: [...get().selectedSizes, size] });
  },
}));
