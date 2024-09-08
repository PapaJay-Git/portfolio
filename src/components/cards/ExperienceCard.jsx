import FontSizeContainer from "../texts/FontSizeContainer";
import AnimatedSection from "../animations/AnimatedSection";

export default function ExperienceCard({data, delay}) {

    return (
        <AnimatedSection animationSettings={ {initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0}, transition: { duration: delay} }}>
            <div className="relative p-3 rounded-lg overflow-hidden col-span-12 mt-5">
                <div
                    className="absolute bg-custom-light-blue bg-opacity-20 left-0 top-0 w-full h-full"/>
                <div
                    className="grid grid-cols-12 gap-5 relative p-3 rounded-lg overflow-hidden">
                    <div className="col-span-12 lg:col-span-3 bg-custom-light-blue rounded-md p-5">
                        <FontSizeContainer size="sm">
                            {data
                                ?.position}
                        </FontSizeContainer>
                        <FontSizeContainer size="xs" additionalClass="font-light mt-5">
                            {data
                                ?.workplace}
                        </FontSizeContainer>
                        <FontSizeContainer size="xs" additionalClass="font-semibold">
                            {data
                                ?.duration}
                        </FontSizeContainer>
                        <button className="py-2 px-3 bg-white text-gray-900 mt-5 rounded-2xl text-xs">
                            {data
                                ?.type}
                        </button>
                    </div>
                    <div className="col-span-12 lg:col-span-9 rounded-md">
                        <FontSizeContainer size="xl">
                            {data
                                ?.company}
                        </FontSizeContainer>
                        <FontSizeContainer size="sm" additionalClass="font-light mt-5">
                            {data
                                ?.description}
                        </FontSizeContainer>
                    </div>
                </div>
            </div>
        </AnimatedSection>

    );
}