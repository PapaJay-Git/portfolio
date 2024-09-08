const MainButtonDesign = ({children, additionalClasses = ''}) => {
    return (
        <span
            className={"cursor-pointer bg-custom-light-blue py-3 px-7 rounded-3xl text-sm md:text-base border border-custom-light-blue hover:bg-custom-black hover:border-white transition-colors duration-300 ease-in-out flex gap-2 items-center justify-center " + additionalClasses}>
            {children}
        </span>
    );
};

export default MainButtonDesign;