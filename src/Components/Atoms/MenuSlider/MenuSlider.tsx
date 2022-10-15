import "./MenuSlider.scss";
import { motion, Variants } from "framer-motion";

const ballAnimation: Variants = {
  a: {
    y: [-12, 0],
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 0.4,
      ease: "easeInOut"
    }
  }
}

export default function MenuSlider({ w, offsetLeft }: { w: number, offsetLeft: number }) {

  return (
    <motion.div className="menu-slider" animate={{ x: offsetLeft }} transition={{ duration: 0.4 }}>
      <motion.div className="menu-slider__ball" variants={ballAnimation} animate="a" />
      <motion.div className="menu-slider__underline" animate={{ width: w }} transition={{ duration: 0.3 }} />
    </motion.div>
  )
}


