import "./NavOption.scss"
import { motion } from "framer-motion";

// Underline animation for Hover of a option
const underlineAnimation = {
  i: { transform: "translate3d(-110%,0px,0px)" },
  a: {
    transform: "translate3d(0%,0px,0px)",
    transition: { type: "spring", damping: 8, mass: 0.8 },
  },
};

interface Props { 
  section:string;
  index:number
 }

const NavOption=({section, index}:Props) => {
  return (
    <motion.div className="navbar__option-container" whileHover="a" initial="i">
      <div className="navbar__option"><span>0{index + 1}.</span>{section}</div>
      <motion.div className="navbar__option-underline" variants={underlineAnimation} />
    </motion.div>
  )
}

export default NavOption

