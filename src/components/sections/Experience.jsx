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
            duration: "September 2024 - Present",
            type: "FULL TIME",
            company: "Falcon Global Services",
            description: `Currently working as a Full Stack Developer, building and maintaining complex web applications using React.js, Express.js, Tailwind CSS, TypeScript, and MS SQL. Collaborating with a team of developers in a highly interactive and agile environment, including daily stand-up meetings as part of sprint cycles to ensure continuous progress and alignment. Focused on both frontend and backend development, creating APIs that integrate with third-party services and managing hosting platforms and property services across the United States. Emphasizing responsive design, seamless data integration, and a smooth user experience across all devices and platforms.`
        },
        {
            position: "Web Developer",
            workplace: "REMOTE",
            duration: "APRIL 2024 - SEPTEMBER 2024",
            type: "PART TIME",
            company: "Multiple Freelance Clients",
            description: `Worked on diverse projects including dynamic landing pages, a cemetery locator system with e-payment integration, a barangay form inventory system, and a guidance assessment system, all built using the Laravel Framework. Leveraged modern web technologies such as HTML, CSS, JavaScript, Tailwind CSS, Animate.css, Owl Carousel, and Animate.js to create responsive and user-friendly interfaces. Each system was tailored to meet specific client needs, ensuring seamless functionality, performance, and an engaging user experience across various devices.`
        },
        {
            position: "Web Developer",
            workplace: "ONSITE",
            duration: "September 2023 - April 2024",
            type: "FULL TIME",
            company: "Enjin Corp.",
            description: `Developed a department-based, social media-like Ticketing System featuring real-time notifications, chat functionality, and satisfaction reviews, alongside an ATM-like Pay Slip System and a POS System user interface. These solutions leveraged a diverse stack of technologies, including Laravel, Vue.js, MySQL, MS SQL, JavaScript, Tailwind CSS, and Bootstrap 5, integrating various tools to ensure dynamic functionality, intuitive design, and seamless user experiences across platforms.`
        }, 
        {
            position: "Web Developer",
            workplace: "ONSITE",
            duration: "September 2023 - April 2024",
            type: "FULL TIME",
            company: "Enjin Corp.",
            description: `Developed a department-based, social media-like Ticketing System featuring real-time notifications, chat functionality, and satisfaction reviews, alongside an ATM-like Pay Slip System and a POS System user interface. These solutions leveraged a diverse stack of technologies, including Laravel, Vue.js, MySQL, MS SQL, JavaScript, Tailwind CSS, Bootstrap 5, and GitHub for version control. Implemented real-time messaging and notifications using Pusher.js and Laravel WebSockets, ensuring dynamic functionality and seamless user experiences across platforms.`
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
