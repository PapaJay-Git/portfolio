
const GridContainer = ({ isGrid = true, children, additionalClasses = '' }) => {
    return (
        <div className={additionalClasses + " px-5 container mx-auto " + (isGrid ? "grid grid-cols-12 " : '')}>
            {children}
        </div>
    );
};

export default GridContainer;