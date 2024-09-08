import {Element} from "react-scroll";
import GradientSection from "../containers/GradientSection";
import TitleContainer from "../texts/TitleContainer";
import FontSizeContainer from "../texts/FontSizeContainer";
import GridContainer from "../containers/GridContainer";
import SocialMediaButtons from "../buttons/SocialMediaButtons";
import ContactMeForm from "../forms/ContactMeForm";

import AnimatedSection from "../animations/AnimatedSection";

export default function Contact() {
    
    const animationSettings = (delay) => {
        return {
            initial: { opacity: 0.8, x: -70 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: delay},
        }
    };

    return (
        <Element name="contact">
            <GradientSection isGradient={true}>
                <GridContainer isGrid={false} additionalClasses="py-10 lg:py-24 mb-10 ">
                    <TitleContainer title="MY CONTACT INFORMATION"/>
                    <FontSizeContainer size="2xl" additionalClass="mb-10">
                        LET'S <span className="text-custom-light-blue">DISCUSS</span> YOUR PROJECT
                    </FontSizeContainer>

                    <AnimatedSection animationSettings={animationSettings(2)}>
                        <div className="relative p-3 rounded-lg overflow-hidden col-span-12 mt-5">
                            <div
                                className="absolute bg-custom-light-blue bg-opacity-20 left-0 top-0 w-full h-full"/>
                            <div
                                className="grid grid-cols-12 gap-5 relative p-3 rounded-lg overflow-hidden">

                                <div className="order-2 lg:order-1 col-span-12 lg:col-span-4">
                                    <FontSizeContainer
                                        size="xs"
                                        additionalClass="tracking-[0.1rem] font-light text-gray-300">
                                        LOCATION
                                    </FontSizeContainer>
                                    <FontSizeContainer size="base" additionalClass="pt-2 pb-10">
                                        Tarlac, Philippines
                                    </FontSizeContainer>

                                    <FontSizeContainer
                                        size="xs"
                                        additionalClass="tracking-[0.1rem] font-light text-gray-300">
                                        EMAIL ME
                                    </FontSizeContainer>
                                    <FontSizeContainer size="base" additionalClass="pt-2">
                                        Jaysoncainglet87@gmail.com
                                    </FontSizeContainer>
                                    <FontSizeContainer
                                        size="xs"
                                        additionalClass="tracking-[0.1rem] font-light pt-10 text-gray-300">
                                        MESSAGE/CALL ME
                                    </FontSizeContainer>
                                    <FontSizeContainer size="base" additionalClass="pt-2 pb-10">
                                        09326193518
                                    </FontSizeContainer>
                                    <SocialMediaButtons/>
                                </div>

                                <div className="order-1 lg:order-2 col-span-12 lg:col-span-8">
                                    <ContactMeForm />
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </GridContainer>
            </GradientSection>
        </Element>
    );
}