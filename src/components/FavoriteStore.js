import { create } from "zustand";

export const useFavoriteStore = create((set, get) => ({
  favoriteList: [],

  fetch: async () => {
    const response = await fetch("http://localhost:3000/favorites");
    set({ favoriteList: await response.json() });
  },

  addFavoriteItem: (item) => {
    fetch(`http://localhost:3000/favorites`, {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(get().fetch());
  },

  deleteFavoriteItem: (item) => {
    fetch(`http://localhost:3000/favorites/${item.id}`, {
      method: "DELETE",
    }).then(get().fetch());
  },

  handleFavorites: (item) => {
    get().favoriteList.some((el) => el.id === item.id)
      ? get().deleteFavoriteItem(item)
      : get().addFavoriteItem(item);
  },
}));
