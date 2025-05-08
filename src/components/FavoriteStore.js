import { create } from "zustand";

export const useFavoriteStore = create((set, get) => ({
  favoriteList: [],

  fetch: async () => {
    const response = await fetch("http://localhost:3000/favorites");
    const data = await response.json();
    set({ favoriteList: data });
  },

  addFavoriteItem: async (item) => {
    // обновим UI сразу
    set((state) => ({
      favoriteList: [...state.favoriteList, item],
    }));

    try {
      await fetch(`http://localhost:3000/favorites`, {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Failed to add favorite:", error);
      // откатим изменения, если запрос неудачный
      get().fetch();
    }
  },

  deleteFavoriteItem: async (item) => {
    set((state) => ({
      favoriteList: state.favoriteList.filter((el) => el.id !== item.id),
    }));

    try {
      await fetch(`http://localhost:3000/favorites/${item.id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error("Failed to delete favorite:", error);
      get().fetch();
    }
  },

  handleFavorites: async (item) => {
    const isFavorite = get().favoriteList.some((el) => el.id === item.id);
    if (isFavorite) {
      await get().deleteFavoriteItem(item);
    } else {
      await get().addFavoriteItem(item);
    }
  },
}));
