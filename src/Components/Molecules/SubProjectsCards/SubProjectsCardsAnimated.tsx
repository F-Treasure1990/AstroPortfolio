import "./SubProjectsCards.scss"
import { motion } from "framer-motion";
import ProjectsSubCard from "@components/Molecules/ProjectsSubCard/ProjectsSubCard";
import SubProjectsData from "@data/SubProjectsData.json"


const numberOfSubProjects = [1, 2, 3, 4, 5, 6];

export default function SubProjectsCards({toggled  = false}: {toggled : boolean}) {
  const container = {
    i: {
      height: 0,
      transition: { duration: 0.8 }
    },

    a: {
      height: "auto",
      transition: {
       staggerChildren: 0.2,
        duration: 1
      },
    },
  }
  return (
    <motion.div className="sub-projects-cards" variants={container} initial="i" animate={toggled ? "a" : "i"}>
      {SubProjectsData[1].map((project, i) => <ProjectsSubCard proj={project} key={`project-${i}`} />)}
    </motion.div>
  )
}

