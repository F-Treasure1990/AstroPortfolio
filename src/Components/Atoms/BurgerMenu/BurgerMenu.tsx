import "./BurgerMenu.scss";
import { useState } from "react";

const BurgerMenu = () => {
  const [clicked, setClicked] = useState(true)

  return (
    <div className="burger-menu" onClick={() => setClicked(!clicked)} >
      <div className="burger-menu__lines-wrapper">
        {[1, 2, 3].map((_, index) => (
          <span className={`burger-menu__line ${clicked && "line-active"}`} key={`burger-menu__line-${index}`} />
        ))}
      </div>
      <div className="burger-menu__dots-wrapper">
        {[1, 2, 3].map((_, index) => (
          <span className={`burger-menu__dot ${clicked && "dot-active"}`} key={`burger-menu__dot-${index}`}/>
        ))}
      </div>
    </div>
  )
}

export default BurgerMenu

