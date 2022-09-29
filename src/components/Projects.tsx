import { useState } from "react"
import { ProjectCard } from "./ProjectCard"


export const Projects = () => {
    const [activeTab, setActiveTab] = useState('Tab 1')


    const projectsAnalyst = [
        {title: "Business Startup", description: "Design & Development", imgUrl: "/images/project-img1.png"},
        {title: "Business Startup", description: "Design & Development", imgUrl: "/images/project-img1.png"},
        {title: "Business Startup", description: "Design & Development", imgUrl: "/images/project-img1.png"},
        {title: "Business Startup", description: "Design & Development", imgUrl: "/images/project-img1.png"},
    ]

    const projectsFrontEnd = [
        {title: "Business Startup", description: "Design & Development", imgUrl: "/images/project-img1.png"},
        {title: "Business Startup", description: "Design & Development", imgUrl: "/images/project-img1.png"},
    ]

    const onUpdateActiveTab = (value) => {
        setActiveTab(value)
    }

    return (
        <>
            <section className="project" id="projects">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>Projects</h2>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur enim eros, faucibus tincidunt urna sed, euismod sollicitudin mauris. </p>
                            <div className="nav nav-tabs" id="projects-tabs">
                                <ul className="nav nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">

                                    <li className="nav-item">
                                        <a className={`${activeTab === 'Tab 1' ?  "active" : ""} nav-link`}  onClick={() => onUpdateActiveTab('Tab 1')} >Tab 1</a>
                                    </li>
                        
                                    <li className="nav-item">
                                        <a className={`${activeTab === 'Tab 2' ?  "active" : ""} nav-link`}  onClick={() => onUpdateActiveTab('Tab 2')}> Tab 2</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className={`${activeTab === 'Tab 3' ?  "active" : ""} nav-link`}  onClick={() => onUpdateActiveTab('Tab 3')}> Tab 3</a>
                                    </li>

                                </ul>

                                <div className="tab-content">
                                    <div className={`tab-pane ${activeTab === 'Tab 1' ?  "active" : ""}`}>
                                        <div className="row">
                                            {projectsAnalyst.map((proj, idx) => {
                                                return (
                                                    <ProjectCard key={idx} {...proj} />
                                                )
                                            })}
                                        </div>
                                    </div>

                                    <div className={`tab-pane ${activeTab === 'Tab 2' ?  "active" : ""}`}>
                                        <div className="row">
                                            {projectsFrontEnd.map((proj, idx) => {
                                                return (
                                                    <ProjectCard key={idx} {...proj} />
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}