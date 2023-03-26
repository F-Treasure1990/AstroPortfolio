import "./ToolbeltOption.scss"
import ProgressBar from "@components/Atoms/ProgressBar/ProgressBar";
import { motion } from "framer-motion"


export interface Props {
  i: number;
  cardOption: {
    name: string
    confidence: number;
    link: string
  }
}

const v = {
  i: {
    opacity: 0
  },
  a: (custom: number) => {
    return {
      opacity: 1,
      transition: {
        delay: custom * 0.1,
        when:"beforeChildren"
      }
    }
  },
  e: {
    opacity: 0,
    transition: {
      duration: 0.4
    }
  }
}

export default function ToolbeltOption({ cardOption, i }: Props) {
  const { name, link, confidence } = cardOption
  return (
    <motion.a className="toolbelt__card" href={link} target="_blank" variants={v} animate="a" initial="i" custom={i} exit="e">
      <div className="toolbelt__card-img">
        <img src={`stackIcons/${name}.svg`} alt={name} width={22} height={22}/>
      </div>
      <div className="toolbelt__card-info">
        <div className="toolbelt__card-title">
          {name}
          <div className="toolbelt__card-confidence">
            {confidence}<span className="toolbelt__card-percentage-sign">%</span>
          </div>
        </div>
        <ProgressBar conf={confidence} i={i} />
      </div>
    </motion.a>
  )
}

