import { useEffect, useState } from "react"
import Linkedin from "../../public/images/linkedin.svg"
import Github from "../../public/images/github.svg"

import * as Scroll from 'react-scroll';

export const Navbar = () => {

    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)

    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

    return(
        <>
            <nav className={`${scrolled ? "scrolled" : ""} navbar navbar-expand-lg`}>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!isNavCollapsed ? true : false} onClick={handleNavCollapse} aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`flex justify-content-around navbar-collapse ${isNavCollapsed ? 'collapse' : ''}`} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Scroll.Link 
                                to="home" 
                                spy={true}
                                smooth={true} 
                                duration={500}
                                className={`${activeLink === 'home' ?  "active" : ""} nav-link`}  onClick={() => onUpdateActiveLink('home')}>

                                Home
                            </Scroll.Link>
                        </li>
                        <li className="nav-item">
                            <Scroll.Link 
                                to="skills" 
                                spy={true}
                                offset={-180}
                                smooth={true} 
                                duration={500}
                                className={`${activeLink === 'skills' ?  "active" : ""} nav-link`}  
                                onClick={() => onUpdateActiveLink('skills')}>

                                Skills
                            </Scroll.Link>
                        </li>
                        <li className="nav-item">
                            <Scroll.Link 
                                to="projects" 
                                spy={true}
                                offset={-40}
                                smooth={true} 
                                duration={500}
                                className={`${activeLink === 'projects' ?  "active" : ""} nav-link`}  
                                onClick={() => onUpdateActiveLink('projects')}>

                                Projects
                            </Scroll.Link>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/bruno-andrade42/" target="_blank"> <Linkedin className="svg" /> </a>
                            <a href="https://github.com/BrunoAndrade42" target="_blank"> <Github className="github svg" /> </a>
                        </div>

                        <Scroll.Link 
                            to="contact" 
                            spy={true}
                            offset={-40}
                            smooth={true} 
                            duration={500}
                            onClick={() => onUpdateActiveLink('contact')}>

                            <button className="vvd"> 
                                <span>Contato</span> 
                            </button>
                        </Scroll.Link>
                    </span>
                </div>
            </nav>
        </>
    )
}