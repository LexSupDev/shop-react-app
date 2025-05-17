import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  cart: [],

  fetch: async () => {
    const response = await fetch(`http://localhost:3000/cart`);
    set({ cart: await response.json() });
  },

  addCartItem: async (item) => {
    console.log(item);
    set((state) => ({
      cart: [...state.cart, item],
    }));

    fetch(`http://localhost:3000/cart`, {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((error) => {
      console.error("Failed to add in cart:", error);
      // откатим изменения, если запрос неудачный
      get().fetch();
    });
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

  resetCart: async () => {
    set({ cart: [] });

    try {
      await fetch("http://localhost:3000/cart", {
        method: "DELETE",
      });
    } catch (error) {
      console.erroe("Failed to delete in cart", error);
      get().fetch();
    }
  },

  updateQuantity: (itemId, newQuantity) => {
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      ),
    }));
  },
}));
