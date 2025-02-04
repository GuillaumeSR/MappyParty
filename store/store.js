import { create } from "zustand";
import { data } from "../data/data"

export const useStore = create((set) => ({
  random_map: {
    boardView: null,
    boardIcon: require ('../assets/game-image/ItemBoxMK8.webp'),
    name: 'Quelle sera votre prochaine carte ?',
  },
  randomMap: () => set(() => ({random_map: data[Math.floor(Math.random() * data.length)]})),
}));
