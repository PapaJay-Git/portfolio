import arrowRight from "./../../assets/svgs/arrow-right.svg"

const ArrowSvg = ({ sizeClass = "h-5 w-5"}) => {

    return (<img
        src={arrowRight}
        alt="Arrow-right"
        className={sizeClass}/>);
};

export default ArrowSvg;