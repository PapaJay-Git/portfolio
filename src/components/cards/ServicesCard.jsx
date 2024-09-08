import TransparentCard from "../cards/TransparentCard";
import ImageContent from "../visuals/ImageContent";
import StarRating from "../visuals/StarRating";
import FontSizeContainer from "../texts/FontSizeContainer";
import AnimatedSection from "../animations/AnimatedSection";

export default function ServicesCard({data, delay}) {

    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-3 w-full ">
            <AnimatedSection animationSettings={ {initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0}, transition: { duration: delay} }}>
                <div className="overflow-hidden bg-transparent border-0 border-gray-400 rounded-xl w-full h-[340px] lg:h-[380px] xl:h-[450px] relative">
                    <div className="absolute top-0 left-0 w-full h-full opacity-60">
                        <ImageContent imageUrl={data
                            ?.url} additionalClasses=""/>
                    </div>
                    <div
                        className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-b from-transparent to-custom-black">

                        <FontSizeContainer size="base">
                            {data
                                ?.title}
                        </FontSizeContainer>
                        <FontSizeContainer size="xs" additionalClass="font-thin py-5 min-h-[80px] xl:min-h-[100]">
                            {data.description}
                        </FontSizeContainer>
                        <p className="border-t border-gray-400"/>
                        <StarRating/>
                    </div>
                </div>
            </AnimatedSection>
        </div>
    );
}