import {useState, useEffect} from "react";
import MainButton from "./MainButton";
import GradientSection from "./GradientSection";
import TitleContainer from "./TitleContainer";
import SocialMediaButton from "./SocialMediaButton";
import {TypeAnimation} from 'react-type-animation';
import FontSizeContainer from "./FontSizeContainer";

import {Element} from 'react-scroll';
import GridContainer from "./GridContainer";
import ArrowSvg from "./ArrowSvg";

const Home = () => {
    const [sequence,
        setSequence] = useState([' DEVELOPER', 2000, ' PROGRAMMER', 3000]);

    return (
        <Element name="home">
            <GradientSection isGradient={true}>
                <GridContainer>
                    <div
                        className="col-span-12 lg:col-span-5 flex items-start justify-center flex-col mt-32">
                        <TitleContainer title="JAYSON CAINGLET"/>
                        <span className="flex flex-col gap-5">
                            <FontSizeContainer size="3xl">
                                <p>HI! I'M JAYSON</p>
                                <p className="text-custom-light-blue mt-3">
                                    I'M A WEB
                                    <TypeAnimation sequence={sequence} speed={10} repeat={Infinity}/>
                                </p>
                            </FontSizeContainer>
                            <FontSizeContainer size="base">
                                Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all
                                exercise blessing. Indulgence way everything joy alteration boisterous the
                                attachment.
                            </FontSizeContainer>
                            <span className="flex flex-col xs:flex-row gap-5 xs:items-center mb-2">
                                <p>
                                    <MainButton>
                                        GET IN TOUCH
                                        <ArrowSvg/>
                                    </MainButton>
                                </p>
                                <span className="flex flex-row gap-2">
                                    <SocialMediaButton
                                        url="https://facebook.com"
                                        imagePath="/src/assets/svgs/facebook.svg"
                                        alt="Facebook Icon"/>
                                    <SocialMediaButton
                                        url="https://instagram.com"
                                        imagePath="/src/assets/svgs/instagram.svg"
                                        alt="instagram Icon"/>
                                    <SocialMediaButton
                                        url="https://linkedin.com"
                                        imagePath="/src/assets/svgs/linkedin.svg"
                                        alt="linkedin Icon"/>
                                </span>
                            </span>
                        </span>
                    </div>
                    <div
                        className="col-span-12 lg:col-span-7 flex justify-center mt-10 lg:mt-32 lg:ps-10">
                        <img
                            src="src/assets/images/home-banner.jpg"
                            className="w-full lg:w-[80%] h-auto "
                            />
                    </div>
                </GridContainer>
            </GradientSection>
        </Element>

    );

};

export default Home;