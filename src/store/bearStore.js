import create from "zustand";
import { devtools } from 'zustand/middleware';

let bearStore = (set) => ({
  bear: 0,

  increBear: (actionType) => set((state) => {
    return {
      bear: state.bear + 1
    }
  },
  false,
  `bear/${actionType}`
  )
});

bearStore = devtools(bearStore);

export default create(bearStore);
