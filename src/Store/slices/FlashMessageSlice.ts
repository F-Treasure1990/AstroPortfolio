export interface IFlashMessageSlice {
  flashMessage:boolean 
  toggleFlashMessage: () => boolean
}

const FlashMessageSlice = (set, get) => ({
  flashMessage: false,
  toggleFlashMessage: () => set((state) => ({ flashMessage: !state.flashMessage})),
})

export default FlashMessageSlice
