import create from 'zustand'
import BurgerMenuSlice, {IBurgerMenuSlice} from "@store/slices/BurgerMenuSlice"
import ToolbeltMenuSlice, {IToolbeltMenuSlice} from "@store/slices/ToolbeltMenuSlice"


interface IStore extends IBurgerMenuSlice, IToolbeltMenuSlice{}

const useStore = create<IStore>((set, get) => ({
...BurgerMenuSlice(set,get),
...ToolbeltMenuSlice(set,get)
}));

export default useStore
