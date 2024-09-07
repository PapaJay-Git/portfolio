import {Element} from "react-scroll";
import GradientSection from "../containers/GradientSection";
import TitleContainer from "../texts/TitleContainer";
import FontSizeContainer from "../texts/FontSizeContainer";
import GridContainer from "../containers/GridContainer";

export default function Experience() {

    return (
        <Element name="experince">
            <GradientSection isGradient={false}>
                <GridContainer isGrid={false} additionalClasses="py-10 lg:py-24 ">
                    <TitleContainer title="EXPERIENCE"/>
                    <FontSizeContainer size="2xl" additionalClass="mb-10">
                        MY WORK <span className="text-custom-light-blue">EXPERIENCE</span>
                    </FontSizeContainer>
                </GridContainer>
            </GradientSection>
        </Element>
    );
}