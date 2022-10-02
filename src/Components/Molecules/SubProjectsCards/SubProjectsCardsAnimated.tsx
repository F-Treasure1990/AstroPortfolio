import "./SubProjectsCards.scss"
import { motion } from "framer-motion";
import ProjectsSubCard from "@components/Molecules/ProjectsSubCard/ProjectsSubCard";



const numberOfSubProjects = [1, 2, 3, 4, 5, 6];

const SubProjectsCards = ({toggled  = false}: {toggled : boolean}) => {
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
      {numberOfSubProjects.map((project, i) => <ProjectsSubCard key={`project-${i}`} />)}
    </motion.div>
  )
}

export default SubProjectsCards
