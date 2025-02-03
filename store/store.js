import { create } from "zustand";
import { data } from "../data/data"

export const useStore = create((set) => ({
  random_map: {
    boardView: require ('../assets/background/Mario-Party-Jamboree.jpg'),
    boardIcon: require ('../assets/logo/Super_Mario_Party_Jamboree_Logo.png'),
  },
  randomMap: () => set((state) => ({random_map: data[Math.floor(Math.random() * data.length)]})),
}));
