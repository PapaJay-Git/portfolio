import FontSizeContainer from "../texts/FontSizeContainer";
import TransparentCard from "./TransparentCard";

const CardShowcase = () => {

    const cardData = [
        {
            title: "10+",
            description: "Projects Developed"
        }, {
            title: "1.5+",
            description: "Years Experience"
        }, {
            title: "10+",
            description: "Languages Frameworks"
        }
    ];

    return (cardData.map((cardDatum, index) => (
        <TransparentCard key={index} additionalClasses="w-full h-auto z-10">
            <FontSizeContainer size="lg" additionalClass="p-3 md:p-5 bg-custom-blue">
                <p>{cardDatum.title}</p>
                <p className="font-medium text-xs">{cardDatum.description}</p>
            </FontSizeContainer>
        </TransparentCard>
    )));
};

export default CardShowcase;
