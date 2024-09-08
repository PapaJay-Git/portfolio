import {Element} from "react-scroll";
import GradientSection from "../containers/GradientSection";
import GridContainer from "../containers/GridContainer";
import TitleContainer from "../texts/TitleContainer";
import FontSizeContainer from "../texts/FontSizeContainer";
import TransparentCard from "../cards/TransparentCard";
import SpyButton from "../buttons/SpyButton";
import ArrowSvg from "../visuals/ArrowSvg";
import CardShowcase from "../cards/CardShowcase";
import AnimatedSection from "../animations/AnimatedSection";
import aboutMeImg from "./../../assets/images/about-me.jpeg"

const About = () => {

    const animationSettings = (delay) => {
        return {
            initial: { opacity: 0.8, x: -60 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: delay},
        }
      };
      

    return (
        <Element name="about_me">
            <GradientSection isGradient={true}>
                <GridContainer>
                    <div
                        className="col-span-12 lg:col-span-6 flex items-center justify-center py-10 lg:py-24 lg:pe-10 relative">
                        <div className="absolute bottom-5 left-0 h-2/3 w-1/2 bg-custom-dark-blue"/> 
                        <div className="z-10 p-2 xs:p-10 f-full w-full flex justify-center">
                            <AnimatedSection animationSettings={animationSettings(1.5)}>
                                <img 
                                src={aboutMeImg} 
                                alt="About me" 
                                className="w-full h-auto xs:h-[300px]  sm:h-[400px]  md:h-[450px] xl:h-[600px] 2xl:h-[700px] object-cover bg-gray-800 border border-gray-400 rounded-xl "/>
                            </AnimatedSection>

                        </div>
                    </div>
                    <div
                        className="col-span-12 lg:col-span-6 flex justify-center flex-col pb-10 lg:py-24 relative">
                        <div className="absolute top-0 right-0 h-1/2 w-1/2 bg-custom-dark-blue "/>
                            <TitleContainer title="ABOUT ME"/>
                            <div className="relative">
                                <AnimatedSection animationSettings={animationSettings(1.5)}>
                                    <FontSizeContainer size="2xl">
                                        <p>I AM AVAILABLE FOR</p>
                                        <p className="text-custom-light-blue">WEB PROJECTS</p>
                                    </FontSizeContainer>
                                    <FontSizeContainer size="sm">
                                        <p className="pt-3">
                                            From dynamic websites to custom web applications, I’m here to turn your digital vision into reality. Let’s build something exceptional together!
                                        </p>
                                    </FontSizeContainer>
                                    <div className="flex flex-row gap-2 py-4">
                                        <CardShowcase/>
                                    </div>
                                    <div className="mt-5 w-fit">
                                        <SpyButton sectionName="contact">
                                            GET IN TOUCH
                                            <ArrowSvg/>
                                        </SpyButton>
                                    </div>
                                </AnimatedSection>
                            </div>
                    </div>
                </GridContainer>
            </GradientSection>
        </Element>
    );
};

export default About;