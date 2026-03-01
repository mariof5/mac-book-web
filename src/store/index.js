import { create } from "zustand";

const useMacbookStore = create((set) => ({
    color:' #232c2e',
    setColor: (color) => set({ color }),

    scale: 0.08,
    setScale:(scale) => set({ scale }),

    texture: '/performance1.png',
    setTexture:(texture) => set({ texture }),

    reset:() => set({ color: '#232c2e', scale: 0.08, texture: '/performance1.png' }),
}));

export default useMacbookStore;