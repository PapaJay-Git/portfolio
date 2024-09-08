import {Element} from "react-scroll";
import GradientSection from "../containers/GradientSection";
import TitleContainer from "../texts/TitleContainer";
import FontSizeContainer from "../texts/FontSizeContainer";
import GridContainer from "../containers/GridContainer";
import ServicesCard from "../cards/ServicesCard";

export default function Services() {
    const webDevelopmentProjects = [
        {
            title: "Web Application Development",
            description: "I create dynamic and interactive web applications that provide a seamless user experience and meet specific business requirements.",
            url: 'src/assets/images/web-application.jfif'
        },
        {
            title: "Full Stack Development",
            description: "I offer end-to-end development services, handling both the frontend and backend to deliver comprehensive and functional solutions.",
            url: 'src/assets/images/full-stack.jpg'
        },
        {
            title: "Website Maintenance & Support",
            description: "I provide ongoing maintenance and support to keep your website running smoothly, including updates, bug fixes, and performance enhancements.",
            url: 'src/assets/images/web-support.jpg'
        },
        {
            title: "API Development & Integration",
            description: "I develop and integrate APIs to enable seamless communication between systems and enhance functionality across platforms.",
            url: 'src/assets/images/api-integration.jpg'
        }
    ];
    
    return (
        <Element name="services">
            <GradientSection isGradient={true}>
                <GridContainer isGrid={true} additionalClasses="py-10 lg:py-24 gap-3">
                    <div className="col-span-12">
                        <TitleContainer title="SERVICES"/>
                        <FontSizeContainer size="2xl" additionalClass="mb-5">
                            DEVELOPMENT <span className="text-custom-light-blue">SERVICES</span> I AM PROVIDING
                        </FontSizeContainer>
                    </div>
                    {webDevelopmentProjects.map((project, index) => (
                        <ServicesCard key={index} data={project} delay={1 + index} /> 
                    ))}
                </GridContainer>
            </GradientSection>
        </Element>
    );
}