import { create } from "zustand";

export const useFiltersStore = create((set, get) => ({
  filteredList: [],
  searchQuery: "",
  selectedCategory: "",
  selectedPrice: { min: 50, max: 200 },
  selectedColors: [],
  selectedSizes: [],

  fetchFilteredList: async () => {
    const {
      searchQuery,
      selectedCategory,
      selectedPrice,
      selectedColors,
      selectedSizes,
    } = get();

    const response = await fetch(
      `http://localhost:3000/goods?q=${searchQuery}&category_like=${selectedCategory}&price_gte=${selectedPrice.min}&price_lte=${selectedPrice.max}`
    );

    const data = await response.json();

    const filtered = data.filter((item) => {
      const colorMatch =
        selectedColors.length === 0 ||
        selectedColors.some((color) => item.colors.includes(color));

      const sizeMatch =
        selectedSizes.length === 0 ||
        selectedSizes.some((size) => item.size.includes(size));

      return colorMatch && sizeMatch;
    });

    set({ filteredList: filtered });
    console.log(filtered)
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
