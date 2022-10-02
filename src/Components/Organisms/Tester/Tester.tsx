import "./Tester.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import ProjectsSubCard from "@components/Molecules/ProjectsSubCard/ProjectsSubCard";

const container = {
  i: {
    height: 0,
    transition: { duration: 0.8 }
  },
  a: {
    height: "auto",
    transition: {
      staggerChildren: 0.25,
      duration: 1
    }
  },
}

const numberOfSubProjects = [1, 2, 3, 4, 5];

const Tester = ({ children }) => {
  const [boxHeight, setBoxHeight] = useState(true)

  return (
    <>
      <motion.div className="tester" variants={container} initial="i" animate={boxHeight ? "a" : "i"}>
        {numberOfSubProjects.map((project, i) => <ProjectsSubCard />
        )}
      </motion.div>
      <div className="tester__divider"></div>
      <div className="tester__toggle-arrow" onClick={() => setBoxHeight(!boxHeight)}>
        <svg
          width="28"
          height="29"
          viewBox="0 0 28 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.49404 11.5063C8.15234 11.1646 7.59832 11.1646 7.25661 11.5063C6.9149 11.848
6.9149 12.402 7.25661 12.7437L13.0899 18.5771C13.4316 18.9188 13.9857 18.9188 14.3274
18.5771L20.1607 12.7437C20.5024 12.402 20.5024 11.848 20.1607 11.5063C19.819 11.1646
19.265 11.1646 18.9233 11.5063L13.7087 16.7209L8.49404 11.5063Z"
            fill="var(--c-accent)"></path>
        </svg>
      </div>

    </>
  )
}

export default Tester
