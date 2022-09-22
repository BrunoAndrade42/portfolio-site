import Image from "next/image"
import { useEffect, useState } from "react"
import { BsDownload } from "react-icons/bs";

export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Data Analyst", "Dev. Front-End"]
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100) 
    const period = 1000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => clearInterval(ticker)
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if(isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if(isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

    return (
        <>
            <section className="banner" id="home">
                <div className="container text-center">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6 col-xl-7">
                            <span className="tagline"> Bem-vindo ao meu Portfólio</span>
                            <h1>{`Olá, Eu sou Bruno`} <br /> <span className="txt-rotate"></span> <span className="wrap"> &nbsp; {text} </span> </h1>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur enim eros, faucibus tincidunt urna sed, euismod sollicitudin mauris. </p>
                            <a href={"#"} target="_blank" download>
                                <button> Download CV <BsDownload className="svg" /> </button>
                            </a>
                        </div>

                        <div className="col-12 col-md-6 col-xl-5">
                            <Image src={"/images/header-img.svg"} alt="Header Image" width={500} height={500}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}