export interface IToolbeltMenuSlice {
  toolbeltMenuOption:number 
  setToolbeltMenuOption: (index : number ) => number
}

const BurgerMenuSlice = (set, get) => ({
  toolbeltMenuOption: 1,
  setToolbeltMenuOption: (index) => set((state) => ({ toolbeltMenuOption: index})),
})

export default BurgerMenuSlice
