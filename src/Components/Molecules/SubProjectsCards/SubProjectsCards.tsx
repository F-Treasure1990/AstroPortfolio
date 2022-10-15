import "./SubProjectsCards.scss"
import { motion } from "framer-motion";
import ProjectsSubCard from "@components/Molecules/ProjectsSubCard/ProjectsSubCard";
import SubProjectsData from "@data/SubProjectsData.json"


export default function SubProjectsCards() {
  const container = {
    i: {
      transition: { duration: 0.8 }
    },

    a: {
      transition: {
        staggerChildren: 0.2,
        duration: 1,
      },
    },
    e: {
      transition: {
        when: "aferChildren"
      }
    }
  }
  return (
    <motion.div className="sub-projects-cards" style={{paddingTop:"8px"}} variants={container} initial="i" animate="a" exit="e">
      {SubProjectsData[0].map((project, i) => <ProjectsSubCard proj={project} key={`project-${i}`} />)}
    </motion.div>
  )
}
