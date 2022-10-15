import "./BurgerMenu.scss";
import useStore from "@store/useStore"
import DotsNav from "@components/Molecules/DotsNav/DotsNav";

export default function BurgerMenu(){
  const toggleBurgerMenu = useStore(state => state.toggleBurgerMenu)
  const burgerMenuToggled = useStore(state => state.burgerMenuToggled)
  return (
    <>
      <div className="burger-menu">
        <div className="burger-menu__line-container" onClick={toggleBurgerMenu}>
          <div className="burger-menu__lines-wrapper" >
            {[1, 2, 3].map((_, index) => (
              <span className={`burger-menu__line ${burgerMenuToggled && "line-active"}`} key={`burger-menu__line-${index}`} />
            ))}
          </div>
        </div>
        <div className="burger-menu__dots-wrapper">
          {[1, 2, 3].map((_, index) => (
            <span className="burger-menu__dot" key={`burger-menu__dot-${index}`} />
          ))}
          <DotsNav />
        </div>
      </div>
    </>
  )
}

