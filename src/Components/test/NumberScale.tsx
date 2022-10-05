import { motion, useMotionValue, animate } from "framer-motion"
import { useEffect, useRef } from "react"


export default function NumberScale({ to }: { to: number }) {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(0, to, {
      duration: 2,
      onUpdate(value) {
        /* @ts-ignore */
        node.textContent = value.toFixed();
      }
    });

    return () => controls.stop();
  }, [to]);

  return (
    <p ref={nodeRef}></p>
  )
}

