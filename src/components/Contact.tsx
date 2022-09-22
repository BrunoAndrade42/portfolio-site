import { useRef, useState } from "react"
import emailjs from '@emailjs/browser';
import Image from "next/image";


export const Contact = () => {

    const [buttonText, setButtonText] = useState('Enviar');
    const [status, setStatus] = useState<{[key:string]: any}>({});

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        setButtonText("Enviando...");
        emailjs.sendForm('service_nqit5hj', 'template_y3pnq8v', form.current, 'XUB0I3rWxFmPVrAam')
        .then(() => {
            setButtonText("Enviar");
            alert('Mensagem enviada com sucesso!')
            e.preventDefault();
            setStatus({ success: true, message: 'Mensagem enviada com sucesso!'});
            e.target.reset()
        }, () => {
            alert('Falha ao enviar a mensagem, por favor tente novamente mais tarde')
            setStatus({ success: false, message: 'Falha ao enviar a mensagem, por favor tente novamente mais tarde'});
        });
    }

    return (
        <>
            <section className="contact" id="contact">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <Image src="/images/contact-img.svg" layout="responsive" width={200} height={200} alt="Contact Us" />
                        </div>
                        <div className="col-md-6">
                            <h2> Entre em Contato</h2>
                            <form onSubmit={handleSubmit} ref={form}>
                                <div className="row">
                                    <div className="col-sm-6 px-1">
                                        <input type="text" name="nome" placeholder="Nome" required />
                                    </div>
                                    
                                    <div className="col-sm-6 px-1">
                                        <input type="text" name="sobrenome" placeholder="Sobrenome" required />
                                    </div>

                                    <div className="col-sm-12 px-1">
                                        <input type="email" name="email" placeholder="Email" required />
                                    </div>
                                    
                                    <div className="col-sm-12 px-1">
                                        <input type="text" name="assunto" placeholder="Assunto" required />
                                    </div>

                                    <div className="col-12">
                                        <textarea rows={6} name="mensagem" placeholder="Mensagem" required ></textarea>
                                        <button type="submit"> <span> {buttonText} </span> </button>
                                    </div>

                                    {status.message &&
                                        <div className="col">
                                            <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                        </div>
                                    }
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}