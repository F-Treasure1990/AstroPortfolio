export interface IBurgerMenuSlice {
  burgerMenuToggled:boolean 
  toggleBurgerMenu: () => boolean
}

const BurgerMenuSlice = (set, get) => ({
  burgerMenuToggled: false,
  toggleBurgerMenu: () => set((state) => ({ burgerMenuToggled: !state.burgerMenuToggled})),
})

export default BurgerMenuSlice
