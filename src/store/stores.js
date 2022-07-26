import create from "zustand";
import { devtools } from 'zustand/middleware';
import bearStore from "./bearStore";
import countStore from "./countStore";
import userStore from './userStore';

let combineStores = (set, get) => ({
  ...bearStore(set, get),
  ...countStore(set, get),
  ...userStore(set, get)
})

combineStores = devtools(combineStores);

export default create(combineStores);
