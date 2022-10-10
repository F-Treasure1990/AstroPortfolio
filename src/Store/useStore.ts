import create from 'zustand'
import BurgerMenuSlice, {IBurgerMenuSlice} from "@store/slices/BurgerMenuSlice"


interface IStore extends IBurgerMenuSlice{}


const useStore = create<IStore>((set, get) => ({
...BurgerMenuSlice(set,get)
}));

export default useStore
