import {Element} from "react-scroll";
import GradientSection from "../containers/GradientSection";
import TitleContainer from "../texts/TitleContainer";
import FontSizeContainer from "../texts/FontSizeContainer";
import GridContainer from "../containers/GridContainer";

export default function Services() {

    return (
        <Element name="services">
            <GradientSection isGradient={true}>
                <GridContainer isGrid={false} additionalClasses="py-10 lg:py-24 ">
                    <TitleContainer title="SERVICES"/>
                    <FontSizeContainer size="2xl" additionalClass="mb-10">
                        DEVELOPMENT <span className="text-custom-light-blue">SERVICES</span> I AM PROVIDING
                    </FontSizeContainer>
                </GridContainer>
            </GradientSection>
        </Element>
    );
}