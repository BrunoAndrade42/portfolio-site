import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";
import Image from "next/image";
import { CircleProgressBar } from "./CircleProgressBar";

export const Skills = () => {
    
    return (
        <>
            <section className="skill" id="skills">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="skill-box">
                                <h2> Skills </h2> <br /> <br />
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
                                            <CircleProgressBar progress="0.92"></CircleProgressBar>
                                            <span>92%</span>
                                            <h5> Pacote Office/Excel/Google Sheets</h5>
                                    </SwiperSlide>
                                    
                                    <SwiperSlide className="item">
                                            <CircleProgressBar progress="0.83"></CircleProgressBar>
                                            <span>83%</span>
                                            <h5> Power BI/Tableau</h5>
                                    </SwiperSlide>

                                    <SwiperSlide className="item">
                                        <div>
                                            <CircleProgressBar progress="0.87"></CircleProgressBar>
                                            <span>87%</span>
                                            <h5> SQL <br />(Bigquery, Postgree, MySQL) </h5>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide className="item">
                                        <div>
                                            <CircleProgressBar progress="0.94"></CircleProgressBar>
                                            <span>94%</span>
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