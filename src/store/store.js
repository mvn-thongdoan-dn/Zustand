import create from "zustand";
import { devtools } from 'zustand/middleware'

export const bearStore = create(devtools((set, get) => ({
  bear: 0,
  getState: () => {
    const dataState = get().useStore.count;
    console.log("dataState", dataState)
  },

  increBear: (actionType) => set((state) => {
    return {
      bear: state.bear + 1
    }
  },
  false,
  `bear/${actionType}`
  )
})));

export const useStore = create(devtools((set) => ({
  count: 0,

  incre: (actionType) => set((state) => {
    return {
      count: state.count + 1
    }
  },
  false,
  `count/${actionType}`
  ),

  decre: (actionType) => set((state) => {
    return {
      count: state.count - 1
    }
  },
  false,
  `count/${actionType}`
  )
})));
