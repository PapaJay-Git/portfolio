import { useState, useEffect} from "react";
import MainButton from "./MainButton";
import TitleContainer from "./TitleContainer";
import SocialMediaButton from "./SocialMediaButton";
import {TypeAnimation} from 'react-type-animation';
import {Element} from 'react-scroll';

const Home = ({ onSectionChange }) => {
    const [sequence,
        setSequence] = useState([' DEVELOPER', 2000, ' PROGRAMMER', 3000]);

    return (
        <Element name="home">
            <section className="pt-32 bg-gradient-to-r from-custom-blue to-custom-dark-blue flex items-center">
                <div
                    className="min-h-100 grid grid-cols-12 px-5 container mx-auto text-gray-200">
                    <div
                        className="col-span-12 lg:col-span-5 flex items-start justify-center flex-col ">
                        <TitleContainer title="JAYSON CAINGLET"/>
                        <span className="text-5xl flex flex-col gap-5">
                            <p>HI! I'M JAYSON</p>
                            <p className="text-custom-light-blue ">
                                I'M A WEB 
                                <TypeAnimation sequence={sequence} speed={10} repeat={Infinity}/>
                            </p>
                            <span className="text-xl ">
                                Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all
                                exercise blessing. Indulgence way everything joy alteration boisterous the
                                attachment.
                            </span>
                            <span className="flex flex-col sm:flex-row gap-5 items-center">
                                <MainButton>GET IN TOUCH
                                    <img
                                        src="/src/assets/svgs/arrow-right.svg"
                                        alt="Arrow-right"
                                        className="h-5 w-5"/>
                                </MainButton>
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
                    <div className="col-span-12 lg:col-span-7 flex justify-center">
                        <img
                            src="src/assets/images/home-banner.png"
                            className="w-auto max-h-[600px]"
                            alt=""/>
                    </div>
                </div>
            </section>
        </Element>

    );

};

export default Home;