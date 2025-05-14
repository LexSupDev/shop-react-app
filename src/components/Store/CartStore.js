import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  cart: [],
  selectedColors: [],
  selectedSizes: [],

  fetch: async () => {
    const response = await fetch(`http://localhost:3000/cart`);
    const data = await response.json();
    set({ cart: data });
  },

  addCartItem: async (item) => {
    item.amount = 1
    set((state) => ({
      cart: [...state.cart, item],
    }));

    try {
      await fetch(`http://localhost:3000/cart`, {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Failed to add in cart:", error);
      // откатим изменения, если запрос неудачный
      get().fetch();
    }
  },

  deleteCartItem: async (id) => {
    set((state) => ({
      cart: state.cart.filter((el) => el.id !== id),
    }));

    try {
      await fetch(`http://localhost:3000/cart/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error("Failed to delete in cart:", error);
      get().fetch();
    }
  },
}));
