import "./ProgressBar.scss"
import { motion } from "framer-motion"


const ProgressBar = ({ conf, i }: { conf: number, i:number }) => {
  return (
    <div className="progessbar">
      <motion.div className="progessbar__inner" animate={{ width: conf + "%" }} initial={{ width: 0 }}  transition={{delay: i * 0.1, duration: 0.8, type:"spring", bounce:0.4}}/>
    </div>
  )
}

export default ProgressBar
