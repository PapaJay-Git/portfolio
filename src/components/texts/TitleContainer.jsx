import AnimatedSection from "../animations/AnimatedSection";

const TitleContainer = ({ title }) => {
    const animationSettings = (delay) => {
        return {
            initial: { opacity: 0, x: -50},
            animate: { opacity: 1, x: 0},
            transition: { duration: delay},
        }
    };
    return (
        <AnimatedSection animationSettings={animationSettings(1.5)}>
            <div className=" z-10 bg-custom-light-blue bg-opacity-20 tracking-[0.2rem] p-4 mb-3 block w-[fit-content] text-xs md:text-sm">{ title }</div>
        </AnimatedSection>
    );
};

export default TitleContainer;