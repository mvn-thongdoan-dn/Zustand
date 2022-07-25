import create from "zustand";
import { devtools } from 'zustand/middleware';
import bearStore from "./bearStore";
import countStore from "./countStore";

let combineStores = (set, get) => ({
  ...bearStore(set, get),
  ...countStore(set, get)
})

combineStores = devtools(combineStores);

export default create(combineStores);
