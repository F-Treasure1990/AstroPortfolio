import "./Navbar.scss"
import BurgerMenu from "@components/Atoms/BurgerMenu/BurgerMenu"
import Button from "@components/Atoms/Button/Button"
import ThemeToggle from "@components/Atoms/ThemeToggle/ThemeToggle"
import NavOption from "@components/Atoms/NavOption/NavOption"
import NavbarLogo from "@components/Atoms/Icons/NavbarLogo"
import NavModal from "@components/Molecules/NavModal/NavModal"
import useStore from "@store/useStore"
import { AnimatePresence } from "framer-motion"
export const navOptions = ["info", "projects", "experience", "resources", "testimonials"];

export default function Navbar(){
  const burgerMenuToggled = useStore(state => state.burgerMenuToggled)
  return (
    <section className="navbar">
      <div className="navbar-container">
        <NavbarLogo />
        <div className="navbar__main">
          <div className="navbar__main-options-container">
            {
              navOptions.map((option, index) => (
                <NavOption section={option} index={index} />
              ))
            }
          </div>
          <div className="navbar__main-divider"></div>

          <div className="navbar__main-actions">

            <ThemeToggle />

            <div className="navbar__main-divider"></div>

            <a href="mailto:fentoncodes@gmail.com">
              <Button variant="border" label="message" />
            </a>
          </div>
          <BurgerMenu />
        </div>
      </div>
      <AnimatePresence>
        {burgerMenuToggled && <NavModal />}
      </AnimatePresence>
    </section>
  )
}

