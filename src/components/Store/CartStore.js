import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  cart: [],

  fetch: async () => {
    const response = await fetch(`http://localhost:3000/cart`);
    set({ cart: await response.json() });
  },
  
  addCartItem: async (item) => {
    const { cart, updateQuantity } = get();
  
    const existingItem = cart.find(
      (el) =>
        el.goodsId === item.goodsId &&
        el.color === item.color &&
        el.size === item.size
    );
  
    if (existingItem) {
      const newQuantity = existingItem.quantity + item.quantity;
      await updateQuantity(existingItem.id, newQuantity);
    } else {
      try {
        const response = await fetch(`http://localhost:3000/cart`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(item),
        });
        const newItem = await response.json();
  
        set((state) => ({
          cart: [...state.cart, newItem],
        }));
      } catch (error) {
        console.error("Failed to add to cart:", error);
        get().fetch(); // откат
      }
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

  resetCart: async () => {
    try {
      await Promise.all(
        get().cart.map((item) =>
          fetch(`http://localhost:3000/cart/${item.id}`, {
            method: "DELETE",
          })
        )
      );
      set({ cart: [] });
    } catch (error) {
      console.error("Failed to reset cart:", error);
      get().fetch(); // откат
    }
  },

  updateQuantity: async (itemId, newQuantity) => {
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      ),
    }));

    try {
      await fetch(`http://localhost:3000/cart/${itemId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity: newQuantity }),
      });
    } catch (error) {
      console.error("Failed to update quantity:", error);
      get().fetch(); // откат если ошибка
    }
  },
}));
