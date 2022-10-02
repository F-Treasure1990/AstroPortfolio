import "./SubProjectsCards.scss"
import { motion } from "framer-motion";
import ProjectsSubCard from "@components/Molecules/ProjectsSubCard/ProjectsSubCard";



const numberOfSubProjects = [1, 2, 3, 4, 5, 6];

const SubProjectsCards = () => {
  const container = {
    i: {
      transition: { duration: 0.8 }
    },

    a: {
      transition: {
       staggerChildren: 0.2,
        duration: 1
      },
    },
  }
  return (
    <motion.div className="sub-projects-cards" variants={container} initial="i" animate="a">
      {numberOfSubProjects.map((project, i) => <ProjectsSubCard  key={`project-${i}`}/>)}
    </motion.div>
  )
}

export default SubProjectsCards
