const GradientSection = ({ isGradient = false, children}) => {
    const gradientClass = 'bg-gradient-to-r from-custom-blue to-custom-dark-blue';

    return (
        <section
            className={`${isGradient ? gradientClass : 'bg-custom-blue'}  overflow-hidden text-gray-200`}>
            {children}
        </section>
    );
}

export default GradientSection;