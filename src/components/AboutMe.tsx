import Image from "next/image"


export const AboutMe = () => {
    return (
        <>
             <section className="about" id="aboutMe">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 flex">
                            <Image src="/images/eu.jpg" className="eu-img" layout="intrinsic" width={400} height={400} alt="About Me" />
                        </div>
                        <div className="col-md-6">
                            <h2> Sobre mim </h2>
                            <div className="row">
                                <p>
                                    Olá, meu nome é Bruno e acredito que os dados podem ser utilizados para
                                    tomar melhores decisões. Possuo Tecnólogo em Ánalise e Desenvolvimento de Sistemas 
                                    (Universidade Presbiteriana Mackenzie) e Graduação em Ciências Econômicas
                                    (Universidade Cruzeiro do Sul). Amo tecnologia e estou sempre me desenvolvendo e 
                                    aprendendo coisas novas! 
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}