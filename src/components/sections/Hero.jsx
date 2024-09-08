
import SpyButton from "../buttons/SpyButton";
import GradientSection from "../containers/GradientSection";
import TitleContainer from "../texts/TitleContainer";
import SocialMediaButtons from "../buttons/SocialMediaButtons";
import {TypeAnimation} from 'react-type-animation';
import FontSizeContainer from "../texts/FontSizeContainer";

import {Element} from 'react-scroll';
import GridContainer from "../containers/GridContainer";
import ArrowSvg from "../visuals/ArrowSvg";

import { motion } from 'framer-motion';

import heroBanner from "./../../assets/images/hero-banner.jpg"
import ImageWithLoading from "../visuals/ImageWithLoading";

const Hero = () => {
    const sequence = ['WEB DEVELOPER', 2000, 'PROBLEM SOLVER', 2000, 'WEB INNOVATOR', 2000];

    const animationSettings = (delay) => {
        return {
            initial: { opacity: 0, scaleY: 1.1, y: 40, x: -5 },
            animate: { opacity: 1, scaleY: 1, y: 0, x:0 },
            transition: { duration: delay },
        }
      };
      
    return (
        <Element name="hero">
            <GradientSection isGradient={true}>
                <GridContainer>
                    <div className="col-span-12 lg:col-span-5 flex items-start justify-center flex-col mt-32 lg:pb-8">
                        <TitleContainer title="JAYSON CAINGLET"/>
                        
                        <div className="flex flex-col gap-5">
                            <FontSizeContainer size="3xl">
                                <motion.div {...animationSettings(1.1)}>
                                    HI! I'M JAYSON
                                </motion.div>
                                <motion.div {...animationSettings(1.3)}>
                                    <p className="text-custom-light-blue mt-3">
                                        I'M A <TypeAnimation sequence={sequence} speed={10} repeat={Infinity}/>
                                    </p>
                                </motion.div>
                            </FontSizeContainer>
                            <FontSizeContainer size="base">
                                <motion.div {...animationSettings(1.4)}>
                                    I’m a web developer dedicated to creating sleek, functional websites and apps. Let's bring your digital ideas to life!
                                </motion.div>
                            </FontSizeContainer>
                            <div className="flex flex-col xs:flex-row gap-5 xs:items-center mb-2">
                                <div className="w-fit">
                                    <motion.div {...animationSettings(1.5)}>
                                        <SpyButton sectionName="contact">
                                            GET IN TOUCH <ArrowSvg/>
                                        </SpyButton>
                                    </motion.div>

                                </div>
                                <motion.div {...animationSettings(1.6)}>
                                        <SocialMediaButtons />
                                </motion.div>
                        
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-7 flex justify-center mt-10 lg:mt-32 lg:ps-10">
                        <ImageWithLoading src={heroBanner} alt={"Home Banner"} classNames="w-full lg:w-[80%]  sm:h-[600px]  md:h-[600px] lg:h-[550px] 2xl:h-[650px] object-cover bg-gray-800" />
                    </div>
                </GridContainer>
            </GradientSection>
        </Element>

    );

};

export default Hero;