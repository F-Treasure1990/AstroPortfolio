import "./DotsNav.scss"
import Button from "@components/Atoms/Button/Button"
import ThemeToggle from "@components/Atoms/ThemeToggle/ThemeToggle"
import Insta20 from "@components/Atoms/Icons/Insta20"
import Github20 from "@components/Atoms/Icons/Github20"
import Linkd20 from "@components/Atoms/Icons/Linkd20"

const DotsNav = () => {
  return (
    <nav className="dots-nav" >
      <div className="dots-nav__social">
        <Insta20 />
        <Github20 />
        <Linkd20 />
      </div>
      <div className="dots-nav__divider" />
      <ThemeToggle />
      <div className="dots-nav__divider" />

      <Button variant="border" label="message" />
    </nav>
  )
}

export default DotsNav
