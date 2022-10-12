import Image from "next/image"


export const ProjectCard = ({title, description, imgUrl, url}) => {
    return (
        <>
            <div className="col-sm-6 col-md-4">
                <a href={url} rel="noopener noreferrer">
                    <div className="proj-imgbx">
                        <Image src={imgUrl} width={1500} height={1200} alt="" />

                        <div className="proj-txtx">
                            <h4> {title} </h4>
                            <span> {description} </span>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}