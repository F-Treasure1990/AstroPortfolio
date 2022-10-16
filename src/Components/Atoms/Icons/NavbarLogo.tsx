import useStore from "@store/useStore"

export default function NavbarLogo() {
  const burgerMenuToggled = useStore(state => state.burgerMenuToggled)
  const toggleBurgerMenu= useStore(state => state.toggleBurgerMenu)
 const scroll = () => {
   if(burgerMenuToggled === true) {
       toggleBurgerMenu()
     }
    window.scrollTo({top:0, behavior:'smooth'})
  };
  return (
    <svg onClick={()=> scroll()} style={{cursor:"pointer"}} width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.7642 31.429C9.14689 21.3394 17.2178 13.2322 27.25 12.8457V19.3922C20.8023 19.7679 15.6437 24.9569 15.2715 31.429H8.7642Z" stroke="url(#paint0_linear_1054_6329)" strokeWidth="1.5" />
      <path d="M19.25 10.4476C16.8643 11.4065 14.6724 12.7447 12.75 14.39V12.1842C12.75 9.58506 10.6488 7.46829 8.05333 7.46829H0.75V0.929199H31.25V7.46829H20H19.25V8.21829V10.4476Z" stroke="url(#paint1_linear_1054_6329)" strokeWidth="1.5" />
      <defs>
        <linearGradient id="paint0_linear_1054_6329" x1="13.6259" y1="11.1946" x2="19.6511" y2="18.3559" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A1C4FD" />
          <stop offset="1" stopColor="#328AF1" />
        </linearGradient>
        <linearGradient id="paint1_linear_1054_6329" x1="9.00147" y1="-0.523237" x2="12.4411" y2="7.73324" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A1C4FD" />
          <stop offset="1" stopColor="#328AF1" />
        </linearGradient>
      </defs>
    </svg>

  )
}


