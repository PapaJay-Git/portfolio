
const GridContainer = ({ isGrid = true, children }) => {
    return (
        <div className={"px-5 container mx-auto " + (isGrid ? "grid grid-cols-12 " : '')}>
            {children}
        </div>
    );
};

export default GridContainer;