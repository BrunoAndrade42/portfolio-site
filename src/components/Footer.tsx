import Linkedin from "../../public/images/linkedin.svg"
import Github from "../../public/images/github.svg"

export const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col text-center">
                            <div className="social-icon">
                                <a href="https://www.linkedin.com/in/bruno-andrade42/" target="_blank" rel="noreferrer"> <Linkedin className="svg" /> </a>
                                <a href="https://github.com/BrunoAndrade42" target="_blank" rel="noreferrer"> <Github className="github svg" /> </a>
                            </div>
                            <p>Site feito por Bruno Andrade 🤖🚀</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}