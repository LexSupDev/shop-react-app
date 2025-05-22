import { create } from "zustand";

export const useFiltersStore = create((set, get) => ({
  filteredList: [],
  searchQuery: "",
  selectedCategory: "",
  selectedPrice: { min: 50, max: 200 },
  selectedColors: [],
  selectedSizes: [],
  totalPages: 0,
  selectedPage: "1",
  pageLimit: "9",
  selectedSort: {
    sortBy: "stars",
    order: "desc",
  },

  fetchFilteredList: async () => {
    const {
      searchQuery,
      selectedCategory,
      selectedPrice,
      selectedColors,
      selectedSizes,
      selectedPage,
      pageLimit,
    } = get();
    const { sortBy, order } = get().selectedSort;

    const response = await fetch(
      `http://localhost:3000/goods?q=${searchQuery}&category_like=${selectedCategory}&price_gte=${selectedPrice.min}&price_lte=${selectedPrice.max}&_sort=${sortBy}&_order=${order}&_page=${selectedPage}&_limit=${pageLimit}`
    );

    const data = await response.json();
    const totalPages = Math.ceil(
      response.headers.get("X-Total-Count") / pageLimit
    );

    const filtered = data.filter((item) => {
      const colorMatch =
        selectedColors.length === 0 ||
        selectedColors.some((color) => item.colors.includes(color));

      const sizeMatch =
        selectedSizes.length === 0 ||
        selectedSizes.some((size) => item.size.includes(size));

      return colorMatch && sizeMatch;
    });

    set({ filteredList: filtered, totalPages: totalPages });
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
