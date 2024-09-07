import {Element} from "react-scroll";
import GradientSection from "./GradientSection";
import GridContainer from "./GridContainer";
import TitleContainer from "./TitleContainer";
import FontSizeContainer from "./FontSizeContainer";
import TransparentCard from "./TransparentCard";
import MainButton from "./MainButton";
import ArrowSvg from "./ArrowSvg";
import CardShowcase from "./CardShowcase";

const About = () => {

    return (
        <Element name="about_me">
            <GradientSection isGradient={true}>
                <GridContainer>
                    <div
                        className="col-span-12 lg:col-span-6 flex items-center justify-center py-10 lg:py-24 lg:pe-10 relative">
                        <div className="absolute bottom-5 left-0 h-2/3 w-1/2 bg-custom-dark-blue"/>
                        <div className="z-10">
                            <TransparentCard>
                                <img src="src/assets/images/about-me.jpg" alt="About me"/>
                            </TransparentCard>
                        </div>
                    </div>
                    <div
                        className="col-span-12 lg:col-span-6 flex justify-center flex-col pb-10 lg:py-24 relative">
                        <div className="absolute top-0 right-0 h-1/2 w-1/2 bg-custom-dark-blue "/>
                        <TitleContainer title="ABOUT ME"/>
                        <FontSizeContainer size="2xl">
                            <p>I AM AVAILABLE FOR</p>
                            <p className="text-custom-light-blue">WEB PROJECTS</p>
                        </FontSizeContainer>
                        <FontSizeContainer size="sm">
                            <p className="pt-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla beatae tenetur
                                quas, maxime in architecto eos similique provident distinctio nobis, dolorem,
                                animi nesciunt mollitia dolore nisi et enim optio sit!
                            </p>
                        </FontSizeContainer>
                        <div className="flex flex-row gap-2 py-4">
                            <CardShowcase/>
                        </div>
                        <div className="mt-5">
                            <MainButton>
                                GET IN TOUCH
                                <ArrowSvg/>
                            </MainButton>
                        </div>
                    </div>
                </GridContainer>
            </GradientSection>
        </Element>
    );
};

export default About;