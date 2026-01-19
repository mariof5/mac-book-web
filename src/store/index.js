import { create } from "zustand";

const useMacbookStore = create((set) => ({
    color:' #232c2e',
    setColor: (color) => set({ color }),

    scale: 0.08,
    setScale:(scale) => set({ scale }),

    reset:() => set({ color: '#232c2e', scale: 0.08 }),
}));

export default useMacbookStore;