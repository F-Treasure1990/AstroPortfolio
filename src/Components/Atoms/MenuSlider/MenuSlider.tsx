import "./MenuSlider.scss";
import { motion, Variants } from "framer-motion";

const ballAnimation: Variants = {
  a: {
    y: [-12, 0],
    transition: {
      repeat: Infinity,
      repeatType:"reverse",
      duration: 0.4,
      ease: "easeInOut"
    }
  }
}

const MenuSlider = ({w, offsetLeft} : {w:number, offsetLeft:number}) => {

  return (
    <motion.div className="menu-slider" animate={{x:offsetLeft}} transition={{duration:0.4}}>
      <motion.div className="menu-slider__ball" variants={ballAnimation} animate="a" />
      <motion.div className="menu-slider__underline" animate={{width:w}} transition={{duration:0.3}}/>
    </motion.div>
  )
}

export default MenuSlider

/* animate={{ x: ballPositon[index], y: [-16, 0] }} */
/*          transition={{ */
/*            y: { */
/*              repeat: Infinity, */
/*              duration: 0.4, */
/*              repeatType: "reverse", */
/*              ease: "easeInOut", */
/*            }, */
/*            x: { */
/*              delay: 0.2, */
/*              duration: 0.5, */
/*            }, */
/*          }} */
