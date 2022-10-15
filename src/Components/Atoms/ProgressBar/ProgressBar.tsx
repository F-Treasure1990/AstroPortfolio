import "./ProgressBar.scss"
import { motion } from "framer-motion"


export default function ProgressBar({ conf, i }: { conf: number, i: number }) {
  const child = {
    i: { width: 0 },
    a: {
      width: conf + "%",
      transition: {
        duration: 0.8, type: "spring", bounce: 0.5
      }
    }
  }
  return (
    <div className="progessbar">
      <motion.div className="progessbar__inner" variants={child}  />
    </div>
  )
}
