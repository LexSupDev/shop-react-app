import { create } from "zustand";


export const usePieceCounterStore = create((set, get) => ({
  count: 1,

  increaseCounter: () => set((state) => ({ count: state.count + 1 })),
  decreaseCounter: () => !(get().count) || set((state) => ({ count: state.count - 1 })),
}));