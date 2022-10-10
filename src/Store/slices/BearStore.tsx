export interface IBear {
  bears: number
  increasePopulation: () => void
  removeAllBears: () => void
}

const useBearStore = (set, get) => ({
  bears: 5,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),

})

export default useBearStore
