import SectionContainer from "../SectionContainer/SectionContainer";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './BenefitStyle.css';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import SlideContent from "./SlideContent";
const BenefitSection = () => {
    return (
        <div className="my-20">
            <h1 className="text-center font-semibold md:font-bold text-xl md:text-2xl lg:text-5xl my-10 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text">For whom is this intended?</h1>
            <SectionContainer>
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }}
                    speed={600}
                    parallax={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Parallax, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <div
                        slot="container-start"
                        className="parallax-bg"
                        style={{
                            'background-image':
                                'url(https://i.ibb.co/X7H4S29/benefit-2.jpg)',
                        }}
                        data-swiper-parallax="-23%"
                    ></div>
                    <SwiperSlide>
                        <SlideContent
                            slideHeader="Business Professionals"
                            slideTitle="Efficiently manage and prioritize tasks, projects, and deadlines."
                            slideDescription="The website provides a centralized platform for organizing tasks, facilitating collaboration among team members, and ensuring timely project completion.">
                        </SlideContent>
                    </SwiperSlide>
                    <SwiperSlide>
                    <SlideContent
                            slideHeader="Students"
                            slideTitle="Stay organized with assignments, exams, and project deadlines."
                            slideDescription="Users can create task lists, set reminders, and track progress, helping students manage their academic responsibilities effectively.">
                        </SlideContent>
                    </SwiperSlide>
                    <SwiperSlide>
                    <SlideContent
                            slideHeader="Freelancers"
                            slideTitle="Streamline project workflows and meet client deadlines."
                            slideDescription="The website allows freelancers to create and track tasks for different projects, ensuring a systematic approach to their work and improving overall productivity.">
                        </SlideContent>
                    </SwiperSlide>
                </Swiper>
            </SectionContainer>
        </div>
    );
};

export default BenefitSection;