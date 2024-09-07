import TransparentCard from "./TransparentCard";
import RoundedButton from "../buttons/RoundedButton";
import ArrowSvg from "../visuals/ArrowSvg";
import FontSizeContainer from "../texts/FontSizeContainer";
import ImageContent from "../visuals/ImageContent";
import ModalProject from "../modals/ModalProject";

export default function CardProject({openModal, data}) {
    return (
        <TransparentCard additionalClasses="bg-white p-2">
                <div className="bg-custom-black w-[300px] h-[200px] sm:w-[350px] sm:h-[250px] md:w-[380px] md:h-[270px] lg:w-[400px] lg:h-[280px] rounded-lg overflow-hidden">
                    <img
                        onClick={() => openModal?.(<ImageContent imageUrl={data?.imageUrl} />)}
                        src={data?.imageUrl}
                        alt="Projects Image"
                        className="h-full w-full object-cover hover:bg-black hover:opacity-50 cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-110"/>
                </div>

                <div className="flex justify-between items-center mt-5 ">
                    <div className="flex flex-col gap-3">
                        <FontSizeContainer size="base" additionalClass="text-gray-900 ">
                            {data?.title}
                        </FontSizeContainer>
                        <FontSizeContainer size="xs" additionalClass="text-gray-600 font-light">
                            {data?.shortDescription}
                        </FontSizeContainer>
                    </div>
                    <div>
                        <RoundedButton onClick={() => openModal?.(<ModalProject data={data} />)}>
                            <ArrowSvg sizeClass="h-4 w-4" />
                        </RoundedButton>
                    </div>
                </div>
        </TransparentCard>
    );
}