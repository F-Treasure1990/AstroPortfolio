import "./ProjectsSubCard.scss"
import { motion } from "framer-motion"
import Button from "@components/Atoms/Button/Button"
import FolderIcon from "@components/Atoms/Icons/FolderIcon"

interface IProject {
  index: number;
  title: string;
  date: string;
  type: string;
  project: string;
  github: string;
  link: string;
}
export default function ProjectsSubCard({ proj }: { proj: IProject }) {
  const cardAnimation = {
    i: { opacity: 0 },
    a: { opacity: 1, transition: { duration: 0.3, ease: "easeIn", y: { duration: 0.3 } } },
  }

  return (
    <motion.div className="project__subcard" variants={cardAnimation}>
      <div className="project__subcard-top">
      <div className="project__subcard-icon">
        <FolderIcon />
      </div> 
        {
          proj?.type === "code" && <div className="project__subcard-btn project__subcard-btn--green">code</div>
        }
        {
          proj?.type === "design" && <div className="project__subcard-btn project__subcard-btn--purple">design</div>
        }
      </div>
      <div >
        <div className="project__subcard-title">
          {proj?.title}
        </div>

        <div className="project__subcard-project-info">
          <div className="project__subcard-btn--project-info project__subcard-btn">
            {proj?.date}
          </div>
          <div className="project__subcard-btn--project-info project__subcard-btn">
            {proj?.project}
          </div>
        </div>
      </div>
      <div className="project__subcard-links">
        {
          proj?.github && (
              <Button variant="border" label="github" flashMessage />
          )
        }
        {
          proj?.link && (
              <Button variant="solid" label="visit" flashMessage />
          )
        }
      </div>
    </motion.div>
  )
}

/* { */
/*           proj?.github && ( */
/*             <a href={proj.github} target='_blank'> */
/*               <Button variant="border" label="github" /> */
/*             </a> */
/*           ) */
/*         } */
/*         { */
/*           proj?.link && ( */
/*             <a href={proj?.link} target="_blank"> */
/*               <Button variant="solid" label="link" /> */
/*             </a> */
/*           ) */
/*         } */
/**/
