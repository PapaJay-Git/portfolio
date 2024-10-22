import {Element} from "react-scroll";
import GradientSection from "../containers/GradientSection";
import TitleContainer from "../texts/TitleContainer";
import FontSizeContainer from "../texts/FontSizeContainer";
import GridContainer from "../containers/GridContainer";
import ExperienceCard from "../cards/ExperienceCard";


export default function Experience() {
    const data = [
        {
            position: "Web Developer",
            workplace: "ONSITE",
            duration: "2023 - 2024",
            type: "FULL TIME",
            company: "Enjin Corp.",
            description: `Developed a department-based, social media-like Ticketing System featuring real-time notifications, chat functionality, and satisfaction reviews, alongside an ATM-like Pay Slip System and a POS System user interface. These solutions leveraged a diverse stack of technologies, including Laravel, Vue.js, MySQL, MS SQL, JavaScript, Tailwind CSS, and Bootstrap 5, integrating various tools to ensure dynamic functionality, intuitive design, and seamless user experiences across platforms.`
        }, {
            position: "Web Developer",
            workplace: "REMOTE",
            duration: "2022 - 2023",
            type: "PART TIME",
            company: "Myo Clinic",
            description: `Developed a fully responsive and interactive clinic website using HTML5, CSS, Bootstrap 5, JavaScript, MySQL, and PHP. The website allows clinic administrators to easily upload and manage dynamic content, including clinic information, services, staff details, and operating hours. With a user-friendly interface, the site enables real-time updates, ensuring patients always have access to the latest information. The website is optimized for performance, mobile-friendly, and designed with intuitive navigation to enhance the user experience, making it easy for visitors to find the clinic’s offerings and contact information quickly.`
        },
        {
            position: "Web Developer",
            workplace: "REMOTE",
            duration: "APRIL 2024 - SEPTEMBER 2024",
            type: "PART TIME",
            company: "Multiple Freelance Clients",
            description: `Designed and developed dynamic, visually appealing landing pages and websites for various clients using the Laravel Framework, HTML, CSS, JavaScript, Tailwind CSS, Animate.css, Owl Carousel, and Animate.js. Focused on creating responsive layouts, smooth animations, and user-friendly interfaces that effectively showcased client services and expertise. The use of modern web technologies ensured functionality, performance, and aesthetic appeal across all devices, enhancing the online presence of multiple businesses.`
        }
    ];

    return (
        <Element name="experince">
            <GradientSection isGradient={false}>
                <GridContainer isGrid={false} additionalClasses="py-10 lg:py-24">
                    <TitleContainer title="EXPERIENCE"/>
                    <FontSizeContainer size="2xl" additionalClass="mb-10">
                        MY WORK <span className="text-custom-light-blue">EXPERIENCE</span>
                    </FontSizeContainer>
                    {data.map((datum, index) => (<ExperienceCard key={index} data={datum} delay={1 + index} />))}
                </GridContainer>
            </GradientSection>
        </Element>
    );
}
