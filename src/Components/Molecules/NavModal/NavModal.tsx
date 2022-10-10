import "./NavModal.scss"
import { motion } from "framer-motion"
import BurgerMenu from "@components/Atoms/BurgerMenu/BurgerMenu"
import NavbarLogo from "@components/Atoms/Icons/NavbarLogo"
import NavModalOption from "@components/Atoms/NavModalOption/NavModalOption"
import { navOptions } from "@components/Organisms/Navbar/Navbar"

const NavModal = () => {
  const v = {
    i: {
      opacity: 0
    },
    a: {
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  }
  return (
    <motion.div className="nav-modal" variants={v} animate="a" initial="i" exit="i">
      {/* modal navbar */}
      <div className="nav-modal__navbar">
        <NavbarLogo />
        <div className="nav-modal__right">
          <div className="nav-modal__divider" />
          <BurgerMenu />
        </div>
      </div>
      {/* modal navbar options */}
      <div className="nav-modal__options">
        {
          navOptions.map(navOptionLabel => (
            <NavModalOption label={navOptionLabel} />
          ))
        }
      </div>
    </motion.div>
  )
}

export default NavModal
