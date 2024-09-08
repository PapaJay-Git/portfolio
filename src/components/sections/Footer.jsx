import GradientSection from "../containers/GradientSection";
import Container from "../containers/Container";
import FontSizeContainer from "../texts/FontSizeContainer";
const Footer = () => {
    return (
        <GradientSection isGradient={true} additionalClasses={"border-t border-gray-800"}>
            <Container additionalClass="text-white">
                <FontSizeContainer size="sm" additionalClass="flex justify-center items-center font-thin py-10">
                    © 2024 copyright all right reserved
                </FontSizeContainer>
            </Container>
        </GradientSection>
    );
};

export default Footer;