import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";
import Image from "next/image";

export const Skills = () => {
    
    return (
        <>
            <section className="skill" id="skills">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="skill-box">
                                <h2> Skills </h2>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur enim eros, faucibus tincidunt urna sed, euismod sollicitudin mauris. </p>
                                <Swiper
                                    slidesPerView="auto"
                                    modules={[Navigation]}
                                    className="skill-slider"
                                    navigation={true}
                                    loop={true}
                                    breakpoints={{
                                        480: {
                                        slidesPerView: 2,
                                        },
                                        
                                        1024: {
                                        slidesPerView: 3,
                                        },

                                        3000: {
                                        slidesPerView: 5,
                                        }
                                    }}
                                >
                                    <SwiperSlide className="item">
                                            <Image src="/images/meter1.svg" alt="" width={150} height={150} />
                                            <h5> Analista de Dados</h5>
                                    </SwiperSlide>
                                    
                                    <SwiperSlide className="item">
                                            <Image src="/images/meter1.svg" alt="" width={150} height={150} />
                                            <h5> Dev. Front-End</h5>
                                    </SwiperSlide>

                                    <SwiperSlide className="item">
                                        <div>
                                            <Image src="/images/meter1.svg" alt="" width={150} height={150} />
                                            <h5> SQL </h5>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide className="item">
                                        <div>
                                            <Image src="/images/meter1.svg" alt="" width={150} height={150} />
                                            <h5> Python/R </h5>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="background-image-left" src={"/images/color-sharp.png"} />
            </section>
        </>
    );
}