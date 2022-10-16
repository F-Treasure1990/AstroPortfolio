import useStore from "@store/useStore"

export default function useFlashMessage() {
  const flashMessage = useStore(state => state.flashMessage)
  const toggleFlashMessage = useStore(state => state.toggleFlashMessage)
  function setToggleFlashMessage() {
      toggleFlashMessage()
      setTimeout(toggleFlashMessage, 2000)
    }
    return [flashMessage, setToggleFlashMessage]
}
