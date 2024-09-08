import star from "../../assets/svgs/star.svg";

export default function StarRating() {
    return (
        <div className="flex flex-row gap-1 text-nowrap my-2">
            {Array.from({ length: 5 }, (_, index) => (
                <img 
                    key={index}
                    src={star} 
                    alt="Star SVG" 
                    className="h-4 w-4"
                    />
            ))}
        </div>
    );
}