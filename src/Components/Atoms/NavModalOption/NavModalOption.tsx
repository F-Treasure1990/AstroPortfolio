import "./NavModalOption.scss";
import useStore from "@store/useStore";

export default function NavModalOption({ label }) {
  const toggleBurgerMenu = useStore((state) => state.toggleBurgerMenu);
  const scroll = (id: string) => {
    /* document.getElementById(id)?.scrollIntoView(); */
    toggleBurgerMenu();
    const section = document.getElementById(id);
    const body = document.querySelector("body");
    const y = section.getBoundingClientRect().top + window.pageYOffset - 72;
    window.scrollTo({ top: y, behavior: "smooth" });
      body.classList.remove("body-overflow")
  };

  return (
    <div className="nav-modal__option" onClick={() => scroll(label)}>
      {label}
    </div>
  );
}
