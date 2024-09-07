
const FontSizeContainer = ({ additionalClass = "", size = 'base', children}) => {
    const fontSizeClasses = {
        "xs": {
            classes: "text-xs lg:text-sm"
        },
        "sm": {
            classes: "text-sm lg:text-base"
        },
        "base": {
            classes: "text-base md:text-lg lg:text-xl"
        },
        "lg": {
            classes: "text-lg md:text-xl lg:text-2xl"
        },
        "xl": {
            classes: "text-xl md:text-2xl lg:text-3xl"
        },
        "2xl": {
            classes: "text-2xl md:text-3xl lg:text-4xl"
        },
        "3xl": {
            classes: "text-3xl md:text-4xl lg:text-5xl"
        },
    };
    return (
        <div className={fontSizeClasses[size].classes + " z-10 " + additionalClass }>
            {children}
        </div>
    );
};

export default FontSizeContainer;