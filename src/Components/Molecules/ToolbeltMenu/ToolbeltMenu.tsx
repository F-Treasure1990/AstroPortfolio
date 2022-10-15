import "./ToolbeltMenu.scss";
import MenuSlider from "@components/Atoms/MenuSlider/MenuSlider";
import { useEffect, useState } from "react";
import useStore from "@store/useStore"

interface OptionInterface {
  optionOffset: number;
  optionWidth: number;
}

export default function ToolbeltMenu() {
  const toolbeltOptions = ["frameworks", "languages", "tooling"]
  const [option, setOption] = useState<OptionInterface>()
  const toolbeltMenuOption  = useStore(state => state.toolbeltMenuOption)
  const setToolbeltMenuOption = useStore(state => state.setToolbeltMenuOption)

  useEffect(() => {
    const navOption = document.querySelector(".toolbelt-menu").children[toolbeltMenuOption] as HTMLElement | null
    const optionOffset = navOption.offsetLeft
    const optionWidth = navOption.clientWidth
    setOption({ optionOffset, optionWidth })
  }, [toolbeltMenuOption])

  return (
    <div className="toolbelt-menu">
      <MenuSlider w={option?.optionWidth} offsetLeft={option?.optionOffset} />
      {
        toolbeltOptions.map((option, i) => (
          <div style={{ color: i === toolbeltMenuOption - 1 && "var(--c-f-white)" }} className="toolbelt-menu__option" onClick={() => setToolbeltMenuOption(i + 1)} key={`toolbeltOption-${i}`}>{option}</div>
        ))
      }
    </div>
  )
}



