import { create } from "zustand";

export const useGoodsStore = create((set, get) => ({
  goodsList: [],

  fetch: async () => {
    const response = await fetch("http://localhost:3000/goods")
    set({ favoriteList: await response.json() })
  },
}));