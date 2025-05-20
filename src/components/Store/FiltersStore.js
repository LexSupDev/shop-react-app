import { create } from "zustand";

export const useFiltersStore = create((set, get) => ({
  filteredList: [],
  searchQuery: "",
  selectedCategory: "",
  selectedPrice: { min: 50, max: 200 },
  selectedColors: [],
  selectedSizes: [],

  fetchFilteredList: async () => {
    const colorsSet = get()
      .selectedColors.map((color) => `${color}`)
      .join("&");
    console.log(colorsSet);
    const response = await fetch(
      `http://localhost:3000/goods?q=${get().searchQuery}&category_like=${
        get().selectedCategory
      }&price_gte=${get().selectedPrice.min}&price_lte=${
        get().selectedPrice.max
      }&color=${colorsSet}`
    );
    const data = await response.json();
    set({ filteredList: data });
  },

  updateFilteredList: async () => {
    const response = await fetch(`http://localhost:3000/goods`);
    const data = await response.json();

    set({
      filteredList: data.filter((item) => {
        const { selectedColors, selectedSizes } = get();

        const colorMatch =
          selectedColors.length === 0 ||
          selectedColors.some((color) => item.colors.includes(color));

        const sizeMatch =
          selectedSizes.length === 0 ||
          selectedSizes.some((size) => item.size.includes(size));

        return colorMatch && sizeMatch;
      }),
    });
  },

  handleColor: (color) => {
    get().selectedColors.includes(color)
      ? set({
          selectedColors: get().selectedColors.filter((el) => el !== color),
        })
      : set({ selectedColors: [...get().selectedColors, color] });
    get().updateFilteredList();
  },

  handleSize: (size) => {
    get().selectedSizes.includes(size)
      ? set({
          selectedSizes: get().selectedSizes.filter((el) => el !== size),
        })
      : set({ selectedSizes: [...get().selectedSizes, size] });
    get().updateFilteredList();
  },
}));
