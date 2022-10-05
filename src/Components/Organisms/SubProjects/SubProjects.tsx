import "./SubProjects.scss";
import Button from "@components/Atoms/Button/Button";
import SubProjectsCards from "@components/Molecules/SubProjectsCards/SubProjectsCards";
import SubProjectsCardsAnimated from "@components/Molecules/SubProjectsCards/SubProjectsCardsAnimated"
import { useState } from "react";

const SubProjects = () => {
  const [toggled, setToggled] = useState(false)
  return (
    <section className="sub-projects">
      <div className="sub-projects__title">Further notable projects</div>
      <div className="sub-projects__btns">
        <Button variant="border" label="view archive" />
        <div className="sub-projects__archived-projects">
          <span className="sub-projects__archived-projects-num">22</span> archived projects
        </div>
      </div>
      <div className="sub-projects__cards">
        <SubProjectsCards />
        <SubProjectsCardsAnimated toggled={toggled} />
      </div>
      <div className="sub-projects__divider" style={{ marginTop: !toggled && "8px" }}></div>
      <div className="sub-projects__toggle-arrow" onClick={() => setToggled(!toggled)} >
        <svg
          width="28"
          height="29"
          viewBox="0 0 28 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            rotate: toggled && "180deg", transition: "all ease 0.3s"
          }}
        >
          <path
            d="M8.49404 11.5063C8.15234 11.1646 7.59832 11.1646 7.25661 11.5063C6.9149 11.848
6.9149 12.402 7.25661 12.7437L13.0899 18.5771C13.4316 18.9188 13.9857 18.9188 14.3274
18.5771L20.1607 12.7437C20.5024 12.402 20.5024 11.848 20.1607 11.5063C19.819 11.1646
19.265 11.1646 18.9233 11.5063L13.7087 16.7209L8.49404 11.5063Z"
            fill="var(--c-accent)"></path>
        </svg>
      </div>
    </section>
  )
}

export default SubProjects
