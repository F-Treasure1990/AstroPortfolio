import "./ProjectsSubCard.scss"
import { motion } from "framer-motion"
import Button from "@components/Atoms/Button/Button"
import FolderIcon from "@components/Atoms/Icons/FolderIcon"


const ProjectsSubCard = () => {

  const cardAnimation = {
    i: { opacity: 0 },
    a: { opacity: 1, transition: { duration: 0.6, ease: "easeIn"} },
  }

  return (
    <motion.div className="project__subcard" variants={cardAnimation} >
      <div className="project__subcard-top">
        <FolderIcon />
        <div className="project__subcard-btn project__subcard-btn--green">code</div>
      </div>

      <div className="project__subcard-title">
        TypeScript vs JavaScript: Which One You Should Use, and Why
      </div>

      <div className="project__subcard-project-info">
        <div className="project__subcard-btn--project-info project__subcard-btn">
          12 Jun, 2022
        </div>
        <div className="project__subcard-btn--project-info project__subcard-btn">
          personal project
        </div>
      </div>
      <div className="project__subcard-links">
        <Button variant="border" label="github" />
        <Button variant="solid" label="link" />
      </div>
    </motion.div>
  )
}

export default ProjectsSubCard
