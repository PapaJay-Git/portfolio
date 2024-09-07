
const Container = ({ children, additionalClass = '' }) => {
    return (
        <div className={"px-5 container mx-auto " + additionalClass}>
            {children}
        </div>
    );
};

export default Container;