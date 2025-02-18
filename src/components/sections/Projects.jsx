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
import cemetery from "./../../assets/images/IMG_20241022_211213.png"
import inventory from "./../../assets/images/Inventory.png"
import ticketing from "./../../assets/images/ticketing.png"
import POS from "./../../assets/images/POS.png"
import enrollmentManagement from "./../../assets/images/enrollment-management.png"
import guidanceSystem from "./../../assets/images/guidance-system.png"
import myoClinic from "./../../assets/images/myo-clinic.png"
import payslipMachine from "./../../assets/images/payslip-machine.png"

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
            "title": "Clinic Website",
            "description": "A dynamic and fully responsive clinic website designed to showcase a variety of healthcare services and products. Built with Laravel for seamless backend management and Tailwind CSS for a modern, responsive front-end design, the website offers an intuitive and user-friendly experience. The site features a comprehensive listing of services, detailed product information, appointment scheduling, and patient testimonials. With integrated JavaScript functionalities, it includes dynamic elements like DataTables for easy viewing and filtering of services and product catalogs. Additionally, the website supports online bookings, real-time notifications, and a secure patient portal for managing appointments and personal information. The use of DataTables ensures smooth and interactive sorting and searching of data. The clinic website also incorporates SEO best practices to enhance visibility, ensuring potential patients can find the clinic with ease.",
            "technologies": "Laravel, Tailwind CSS, JavaScript, DataTables, MySQL, Blade Templates, SEO Optimization, Real-Time Notifications, Appointment Scheduling",
            "shortDescription": "Dynamic and responsive clinic website.",
            "imageUrl": myoClinic
        },        
        {
            "title": "Guidance Management System",
            "description": "A comprehensive Guidance Management System designed for schools to assess students' well-being. Students sign up using their Certificate of Registration (COR), which the campus verifies. The system allows students to take assessments to evaluate their stress, anxiety, or depression levels. If any concerns are detected, students can schedule a meeting with the guidance office. Admins can track and analyze assessment results based on gender and category, generating valuable insights. The system includes automated email notifications, recommendations, and intervention plans for various scenarios. Built with Laravel, Bootstrap 5, JavaScript, MySQL, Chart.js, and Laravel's built-in notification system.",
            "technologies": "Laravel, Bootstrap 5, JavaScript, MySQL, Chart.js, Laravel Notification System",
            "shortDescription": "System that helps schools assess students.",
            "imageUrl": guidanceSystem
        },
        {
            "title": "Enrollment Management System",
            "description": "A robust Enrollment Management System developed for VCS to streamline student enrollment processes. Built with Vanilla PHP, jQuery, JavaScript, and MySQL, the system automates student registration, record management, and notifications. The responsive interface is designed using Bootstrap 5, while Owl Carousel enhances the user experience with interactive visuals. Nodemailer is integrated for automated email notifications, ensuring seamless communication between students and administrators. This project showcases my expertise in full-stack web development, database management, and UI/UX design.",
            "technologies": "Vanilla PHP, jQuery, JavaScript, MySQL, Bootstrap 5, Owl Carousel, Nodemailer",
            "shortDescription": "An automated Enrollment Management System.",
            "imageUrl": enrollmentManagement
        },        
        {
            "title": "Business Website",
            "description": "A dynamic and visually engaging landing page designed to showcase the company's services and expertise. The website features an interactive layout that enhances user engagement while effectively presenting the company's offerings and achievements. Built with HTML, CSS, and JavaScript, the design leverages Tailwind CSS for styling, Animate.css and Animate.js for smooth animations, and Owl Carousel for interactive elements. This project highlights my front-end development skills in creating responsive and captivating web experiences.",
            "technologies": "HTML, CSS, JavaScript, Tailwind CSS, Animate.css, Owl Carousel, Animate.js",
            "shortDescription": "An interactive landing page for a business.",        
            "imageUrl": DRHM
        }, 
        {
            "title": 'Cemetery Tombstone Management',
            "description": `I developed a comprehensive tombstone locator system with integrated e-payment functionality for a cemetery. This system allows users to efficiently locate tombstones and make payments online. It features an intuitive interface for searching and viewing tombstone locations, and a secure, user-friendly payment process. The solution is designed to streamline cemetery operations and enhance the user experience for managing and locating memorials.`,
            "technologies": 'Laravel, MySQL, Bootstrap 5, HTML, CSS, JavaScript, Leaflet.js, DataTables, PHPMailer, and SweetAlert2',
            "shortDescription": 'Full-stack Development',
            "imageUrl": cemetery
        }, 
        {
            "title": 'Barangay Form Inventory System',
            "description": 'I developed a versatile form inventory system tailored for a barangay, featuring six types of forms. This system enables efficient management and generation of forms, which can be output as PDFs. It provides a streamlined process for creating, tracking, and handling various forms, enhancing administrative efficiency and ensuring seamless document management.',
            "technologies": 'Laravel, MySQL, Bootstrap 5, HTML, CSS, JavaScript, DomPDF, DataTables, PHPMailer, and SweetAlert2',
            "shortDescription": 'Full-stack Development',
            "imageUrl": inventory
        },
        {
            "title": 'Ticketing System',
            "description": 'I developed a sophisticated department-based ticketing system designed to streamline communication and manage issues effectively. This system features real-time notifications, integrated chat functionality, and satisfaction reviews, enhancing user interaction and support efficiency. It provides a dynamic and responsive interface, offering instant updates, seamless communication, and actionable feedback. The platform is tailored to improve departmental operations, ensuring a smooth and efficient process for handling support requests and boosting overall productivity.',
            "technologies": `Laravel, MySQL, CSS, HTML, JavaScript, jQuery, Bootstrap 5, Pusher JS, Chart.js, DomPDF, Flatpickr, Laravel Echo, SweetAlert2, Video.js, and DataTables.`,
            "shortDescription": 'Full-stack Development',
            "imageUrl": ticketing
        }, 
        {
            "title": 'POS System',
            "description": 'I designed and developed the user interface for a Point of Sale (POS) system, focusing on creating an intuitive and efficient experience for users. The interface features a visually appealing and responsive layout that ensures a smooth, user-friendly interaction. It enhances transaction processes and improves operational efficiency, providing a seamless and effective solution for point-of-sale needs.',
            "technologies": ' Laravel, Laravel Inertia, Vue.js, HTML, CSS, JavaScript, and Bootstrap 5',
            "shortDescription": 'Front-end Development',
            "imageUrl": POS
        }, 
        {
            "title": "Payslip Machine",
            "description": "I designed and developed the user interface for a Payslip Machine, creating an efficient and user-friendly solution for managing pay slips. The interface focuses on providing employees with easy access to their payroll information in a secure, intuitive environment. The design ensures a seamless user experience with a clean and responsive layout, allowing users to quickly view, download, and manage their pay slips, improving accessibility and transparency.",
            "technologies": "Laravel, Laravel Inertia, Vue.js, HTML, CSS, JavaScript, and Bootstrap 5",
            "shortDescription": "User Interface Design for Payslip Management",
            "imageUrl": payslipMachine
        }        
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
