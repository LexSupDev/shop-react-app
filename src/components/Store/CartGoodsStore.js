import { create } from "zustand";

export const useCartGoodsStore = create((set) => ({
  cartGoods: [],

  fetchByIds: async (ids = []) => {
    if (ids.length === 0) {
      set({ cartGoods: [] });
      return;
    }
    const query = ids.map((id) => `id=${id}`).join("&");
    const res = await fetch(`http://localhost:3000/goods?${query}`);
    const data = await res.json();
    set({ cartGoods: data });
  },

  clear: () => set({ cartGoods: [] }),
}));