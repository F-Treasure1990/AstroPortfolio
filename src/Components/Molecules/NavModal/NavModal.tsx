import "./NavModal.scss"
import { motion } from "framer-motion"
import BurgerMenu from "@components/Atoms/BurgerMenu/BurgerMenu"
import NavbarLogo from "@components/Atoms/Icons/NavbarLogo"
import NavModalOption from "@components/Atoms/NavModalOption/NavModalOption"
import { navOptions } from "@components/Organisms/Navbar/Navbar"
import ThemeToggle from "@components/Atoms/ThemeToggle/ThemeToggle"
import Linkd20 from "@components/Atoms/Icons/Linkd20"
import Github20 from "@components/Atoms/Icons/Github20"
import Insta20 from "@components/Atoms/Icons/Insta20"

export default function NavModal() {
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

        <div className="navbar__logo-wrapper">
          <NavbarLogo />
        </div>
        <div className="nav-modal__right">
          <div className="nav-modal__divider" />
          <BurgerMenu />
        </div>
      </div>
      {/* modal navbar options */}
      <div className="nav-modal__options">
        {
          navOptions.map((navOptionLabel, i) => (
            <NavModalOption label={navOptionLabel} key={`${navOptionLabel}-${i}`} />
          ))
        }
        <div className="nav-modal__theme">
          appearance
          <ThemeToggle />
        </div>
        <div className="nav-modal__media">
          <a href="#"><Insta20 /></a>
          <a href="#">
            <Github20 />
          </a>
          <a href="#">
            <Linkd20 />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

