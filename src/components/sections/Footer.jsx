import GradientSection from "../containers/GradientSection";
import Container from "../containers/Container";
import FontSizeContainer from "../texts/FontSizeContainer";
const Footer = () => {
    return (
        <GradientSection isGradient={true}>
            <Container additionalClass="text-white">
                <FontSizeContainer size="sm" additionalClass="flex justify-center items-center font-thin p-5">
                    © 2024 copyright all right reserved
                </FontSizeContainer>
            </Container>
        </GradientSection>
    );
};

export default Footer;