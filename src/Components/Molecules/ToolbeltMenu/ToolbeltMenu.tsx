import "./ToolbeltMenu.scss";
import MenuSlider from "@components/Atoms/MenuSlider/MenuSlider";
import { useEffect, useState } from "react";

interface OptionInterface {
  optionOffset: number;
  optionWidth: number;
}

const ToolbeltMenu = () => {
  const toolbeltOptions = ["frameworks", "languages", "tooling"]
  const [optionIndex, setOptionIndex] = useState(1)
  const [option, setOption] = useState<OptionInterface>()

  useEffect(() => {
    const navOption = document.querySelector(".toolbelt-menu").children[optionIndex] as HTMLElement | null
    const optionOffset = navOption.offsetLeft
    const optionWidth = navOption.clientWidth
    setOption({ optionOffset, optionWidth })
  }, [optionIndex])

  return (
    <div className="toolbelt-menu">
      <MenuSlider w={option?.optionWidth} offsetLeft={option?.optionOffset} />
      {
        toolbeltOptions.map((option, i) => (
          <div style={{ color: i === optionIndex - 1 && "var(--c-f-white)" }} className="toolbelt-menu__option" onClick={() => setOptionIndex(i + 1)} key={`toolbeltOption-${i}`}>{option}</div>
        ))
      }
    </div>
  )
}

export default ToolbeltMenu


