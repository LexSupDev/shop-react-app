import { create } from "zustand";

export const useFavoriteStore = create((set, get) => ({
  favoriteList: [],

  fetch: async () => {
    const response = await fetch("http://localhost:3000/favorites")
    set({ favoriteList: await response.json() })
  },
}));
