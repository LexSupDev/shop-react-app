import { create } from "zustand";

export const useGoodsStore = create((set, get) => ({
  goodsList: [],

  fetch: async () => {
    const response = await fetch("http://localhost:3000/goods");
    const data = await response.json();
    set({ goodsList: data });
  },
}));