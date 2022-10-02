
import {  animate } from "framer-motion"
import { useEffect, useRef } from "react"

const NumberIncrement = ({ to }: { to: number }) => {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(0, to, {
      duration: 1,
      onUpdate(value) {
        //@ts-ignore
        node.textContent = value.toFixed();
      }
    });

    return () => controls.stop();
  }, [to]);

  return (
    <span ref={nodeRef}>0</span>
  )
}

export default NumberIncrement
