import Image from "next/image"
import Link from "next/link"


export const ProjectCard = ({title, description, imgUrl, url}) => {
    return (
        <>
            <div className="col-sm-6 col-md-4">
                <Link href={url}>
                    <div className="proj-imgbx">
                        <Image src={imgUrl} width={1500} height={1200} alt="" />

                        <div className="proj-txtx">
                            <h4> {title} </h4>
                            <span> {description} </span>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}