const GradientSection = ({ isGradient = false, children, additionalClasses}) => {
    const gradientClass = 'bg-gradient-to-r from-custom-blue to-custom-dark-blue';

    return (
        <section
            className={`${isGradient ? gradientClass : 'bg-custom-blue'}  overflow-hidden text-gray-200 ${additionalClasses}`}>
            {children}
        </section>
    );
}

export default GradientSection;