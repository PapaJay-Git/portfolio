import FontSizeContainer from "./FontSizeContainer";
import TransparentCard from "./TransparentCard";

const CardShowcase = () => {

    const cardData = [
        {
            title: "5+",
            description: "Projects Developed"
        }, {
            title: "1+",
            description: "Years Experience"
        }, {
            title: "10+",
            description: "Languages Frameworks"
        }
    ];

    return (cardData.map((cardDatum, index) => (

        <TransparentCard key={index} classes="w-full h-auto z-10">
            <FontSizeContainer size="lg">
                <div className="p-3 md:p-5 bg-custom-blue">
                    <p>{cardDatum.title}</p>
                    <p className="font-medium text-xs">{cardDatum.description}</p>
                </div>
            </FontSizeContainer>
        </TransparentCard>
    )));
};

export default CardShowcase;