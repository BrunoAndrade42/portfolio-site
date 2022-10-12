import { useState } from "react"
import { ProjectCard } from "./ProjectCard"


export const Projects = () => {
    const [activeTab, setActiveTab] = useState('Análise de Dados')


    const projectsAnalyst = [
        {title: "Filotaxia: Desenhando Flores com Matemática", description: "Visualização de dados e Caso de Estudo", imgUrl: "/images/flor-interativa.png", url: "https://github.com/BrunoAndrade42/Drawing-Flowers"},
        {title: "Cyclistic Capstone Google", description: "Projeto completo; visualização, limpeza e manipulação de dados;", imgUrl: "/images/topestacoes.png", url: "https://github.com/BrunoAndrade42/Cyclistic-Capstone-Google"},
        {title: "O Mapa Fantasma", description: "Visualização e manipulação de dados; Caso de estudo", imgUrl: "/images/capa_john_snow_colera.png", url: "https://github.com/BrunoAndrade42/The-Ghost-Map"},
        {title: "Business Startup", description: "Design & Development", imgUrl: "/images/project-img1.png", url:""},
    ]

    const projectsFrontEnd = [
        {title: "Business Startup", description: "Design & Development", imgUrl: "/images/project-img1.png", url:""},
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
                            <h2>Projetos</h2>
                            <p> Uma amostra do meu trabalho e projetos pessoais </p>
                            <div className=" nav nav-tabs" id="projects-tabs">
                                <ul className="nav nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">

                                    <li className="nav-item">
                                        <a className={`${activeTab === 'Análise de Dados' ?  "active" : ""} nav-link`}  onClick={() => onUpdateActiveTab('Análise de Dados')} >Análise de Dados</a>
                                    </li>
                        
                                    <li className="nav-item">
                                        <a className={`${activeTab === 'Dev. Front-End' ?  "active" : ""} nav-link`}  onClick={() => onUpdateActiveTab('Dev. Front-End')}> Dev. Front-End</a>
                                    </li>
                                </ul>

                                <div className="tab-content">
                                    <div className={`tab-pane ${activeTab === 'Análise de Dados' ?  "active" : ""}`}>
                                        <div className="row">
                                            {projectsAnalyst.map((proj, idx) => {
                                                return (
                                                    <ProjectCard key={idx} {...proj} />
                                                )
                                            })}
                                        </div>
                                    </div>

                                    <div className={`tab-pane ${activeTab === 'Dev. Front-End' ?  "active" : ""}`}>
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