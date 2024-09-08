import { useRef } from "react";
import {Element} from "react-scroll";
import GradientSection from "../containers/GradientSection";
import TitleContainer from "../texts/TitleContainer";
import FontSizeContainer from "../texts/FontSizeContainer";
import GridContainer from "../containers/GridContainer";
import CardProject from "../cards/CardProject";

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {FreeMode, Pagination} from 'swiper/modules';
import AnimatedSection from "../animations/AnimatedSection";

import DRHM from "./../../assets/images/DRHM.png"
import cemetery from "./../../assets/images/cemetery.png"
import inventory from "./../../assets/images/inventory.png"
import ticketing from "./../../assets/images/ticketing.png"
import POS from "./../../assets/images/POS.png"

export default function Projects({openModal}) {
    const animationSettings = (delay) => {
        return {
            initial: { opacity: 0, scale: 0.95 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: delay},
        }
    };

    const paginationRef = useRef(null);
    const paginationConfig = {
        el: paginationRef.current,
        clickable: true,
    };
    const onSwiperRenderToPaginationRed = (swiper) => {
        if (paginationRef.current) {
            swiper.params.pagination.el = paginationRef.current;
            swiper.pagination.init();
            swiper.pagination.render();
            swiper.pagination.update();
          }
    };
    const data = [
        {
            title: 'Business Website',
            description: `I developed a dynamic landing page designed to effectively showcase the company's services and experience. The page features an interactive and visually appealing layout crafted to engage potential clients and highlight key offerings. Its design ensures a seamless and attractive user experience, presenting the company's capabilities and achievements in a compelling manner.`,
            technologies: 'HTML, CSS, JavaScript, Tailwind CSS, Animate.css, Owl Carousel, and Animate.js',
            shortDescription: 'Front-end Development',
            imageUrl: DRHM
        }, {
            title: 'Cemetery Tombstone Management',
            description: `I developed a comprehensive tombstone locator system with integrated e-payment functionality for a cemetery. This system allows users to efficiently locate tombstones and make payments online. It features an intuitive interface for searching and viewing tombstone locations, and a secure, user-friendly payment process. The solution is designed to streamline cemetery operations and enhance the user experience for managing and locating memorials.`,
            technologies: 'Laravel, MySQL, Bootstrap 5, HTML, CSS, JavaScript, Leaflet.js, DataTables, PHPMailer, and SweetAlert2',
            shortDescription: 'Full-stack Development',
            imageUrl: cemetery
        }, {
            title: 'Barangay Form Inventory System',
            description: 'I developed a versatile form inventory system tailored for a barangay, featuring six types of forms. This system enables efficient management and generation of forms, which can be output as PDFs. It provides a streamlined process for creating, tracking, and handling various forms, enhancing administrative efficiency and ensuring seamless document management.',
            technologies: 'Laravel, MySQL, Bootstrap 5, HTML, CSS, JavaScript, DomPDF, DataTables, PHPMailer, and SweetAlert2',
            shortDescription: 'Full-stack Development',
            imageUrl: inventory
        },
        {
            title: 'Ticketing System',
            description: 'I developed a sophisticated department-based ticketing system designed to streamline communication and manage issues effectively. This system features real-time notifications, integrated chat functionality, and satisfaction reviews, enhancing user interaction and support efficiency. It provides a dynamic and responsive interface, offering instant updates, seamless communication, and actionable feedback. The platform is tailored to improve departmental operations, ensuring a smooth and efficient process for handling support requests and boosting overall productivity.',
            technologies: `Laravel, MySQL, CSS, HTML, JavaScript, jQuery, Bootstrap 5, Pusher JS, Chart.js, DomPDF, Flatpickr, Laravel Echo, SweetAlert2, Video.js, and DataTables.`,
            shortDescription: 'Full-stack Development',
            imageUrl: ticketing
        }, {
            title: 'POS System',
            description: 'I designed and developed the user interface for a Point of Sale (POS) system, focusing on creating an intuitive and efficient experience for users. The interface features a visually appealing and responsive layout that ensures a smooth, user-friendly interaction. It enhances transaction processes and improves operational efficiency, providing a seamless and effective solution for point-of-sale needs.',
            technologies: ' Laravel, Laravel Inertia, Vue.js, HTML, CSS, JavaScript, and Bootstrap 5',
            shortDescription: 'Front-end Development',
            imageUrl: POS
        }, 
    ];
    return (
        <Element name="projects">
            <GradientSection isGradient={false}>
                <GridContainer isGrid={false} additionalClasses="py-10">
                    <TitleContainer title="MY WORK"/>
                    <FontSizeContainer size="2xl" additionalClass="mb-5">
                        RECENT PROJECTS
                    </FontSizeContainer>
                    
                    <AnimatedSection animationSettings={animationSettings(1)}>  
                        <div className="relative h-[330px] sm:h-[380px] md:h-[400px] lg:h-[420px]">
                                <div className="absolute top-0 left-0 w-screen h-screen custom-swiper">          
                                    <Swiper
                                        onSwiper={(swiper) => onSwiperRenderToPaginationRed(swiper)}
                                        modules={[FreeMode, Pagination]}
                                        pagination={paginationConfig}
                                        slidesPerView={'auto'}
                                        spaceBetween={20}
                                        grabCursor={true}
                                        >
                                        {data.map((datum, index) => (
                                            <SwiperSlide key={index}>
                                                <CardProject openModal={openModal} data={datum}/>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                        </div>
                    </AnimatedSection>
                    
                    <div ref={paginationRef} className="custom-pagination"></div>
                </GridContainer>
            </GradientSection>
        </Element>
    );
}