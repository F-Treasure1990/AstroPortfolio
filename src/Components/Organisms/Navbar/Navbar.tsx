import "./Navbar.scss"
import BurgerMenu from "@components/Atoms/BurgerMenu/BurgerMenu"
import Button from "@components/Atoms/Button/Button"
import ThemeToggle from "@components/Atoms/ThemeToggle/ThemeToggle"
import NavOption from "@components/Atoms/NavOption/NavOption"
import NavbarLogo from "@components/Atoms/Icons/NavbarLogo"
import NavModal from "@components/Molecules/NavModal/NavModal"
import useStore from "@store/useStore"
import { AnimatePresence } from "framer-motion"
import FlashMessage from "@components/Molecules/FlashMessage/FlashMessage"
import useFlashMessage from "src/Hooks/useFlashMessage"
export const navOptions = ["info", "projects", "experience", "resources", "testimonials"];

export default function Navbar() {
  const burgerMenuToggled = useStore(state => state.burgerMenuToggled)
  const [flashMessage] = useFlashMessage()

  return (
    <>
      <AnimatePresence>
        {
          flashMessage && <div className="flash-message__wrapper">
            <FlashMessage />
          </div>
        }
      </AnimatePresence>
      <section className="navbar" >
        <div className="navbar-container">
          <div className="navbar__logo-wrapper">
            <NavbarLogo />
          </div>
          <div className="navbar__main">
            <div className="navbar__main-options-container">
              {
                navOptions.map((option, index) => (
                  <NavOption section={option} index={index} key={option} />
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
    </>
  )
}

