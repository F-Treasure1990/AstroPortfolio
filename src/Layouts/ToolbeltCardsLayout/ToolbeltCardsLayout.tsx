import "./ToolbeltCardsLayout.scss"
import ToolbeltOption from "@components/Molecules/ToolbeltOption/ToolbeltOption"
import useStore from "@store/useStore"
import ToolbeltData from "@data/ToolbeltData.json";
import { AnimatePresence} from "framer-motion"

export default function ToolbeltCardsLayout() {
  const toolbeltMenuOption = useStore(state => state.toolbeltMenuOption)

  return (
    <section className="toolbelt__cards-container" >
      <div className="toolbelt__cards-wrapper">
      <AnimatePresence mode="wait">
        {
          ToolbeltData[toolbeltMenuOption - 1].map((cardOption, index) => (
            <ToolbeltOption
              i={index}
              cardOption={cardOption}
              key={cardOption.name}
            />
          ))
        }
      </AnimatePresence>
</div>
    </section >
  )
}
