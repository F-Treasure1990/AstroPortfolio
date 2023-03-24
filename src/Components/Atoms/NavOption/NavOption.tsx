import "./NavOption.scss";
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
  section: string;
  index: number;
}

const NavOption = ({ section, index }: Props) => {
  const scroll = (id: string) => {
    /* document.getElementById(id)?.scrollIntoView(); */
    const section = document.getElementById(id);
    const y = section.getBoundingClientRect().top + window.pageYOffset - 72;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
   
      <div className="navbar__option">
        <span>0{index + 1}.</span>
        {section}
      </div>
     
  );
};

export default NavOption;
