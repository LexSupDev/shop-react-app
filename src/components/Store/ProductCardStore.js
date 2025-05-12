import { create } from "zustand";


export const useProductCardStore = create((set) => ({
  product: [],

  fetch: async (id) => {
    const response = await fetch(`http://localhost:3000/goods/${id}`);
    const data = await response.json();
    set({ product: data });
  },
}));