import create from 'zustand'
import BurgerMenuSlice, { IBurgerMenuSlice } from "@store/slices/BurgerMenuSlice"
import ToolbeltMenuSlice, { IToolbeltMenuSlice } from "@store/slices/ToolbeltMenuSlice"
import FlashMessageSlice, { IFlashMessageSlice } from "@store/slices/FlashMessageSlice"

interface IStore extends IBurgerMenuSlice, IToolbeltMenuSlice, IFlashMessageSlice { }

const useStore = create<IStore>((set, get) => ({
  ...BurgerMenuSlice(set, get),
  ...ToolbeltMenuSlice(set, get),
  ...FlashMessageSlice(set,get)
}));

export default useStore
