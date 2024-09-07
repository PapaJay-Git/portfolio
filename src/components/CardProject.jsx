import TransparentCard from "./TransparentCard";
import RoundedButton from "./RoundedButton";
import ArrowSvg from "./ArrowSvg";
import FontSizeContainer from "./FontSizeContainer";
import ImageModalContent from "./ImageModalContent";
import ModalProject from "./ModalProject";

export default function CardProject({openModal, data}) {
    return (
        <TransparentCard>
            <div className="bg-white p-5">
                <div className="bg-custom-black w-[300px] h-[200px] sm:w-[350px] sm:h-[250px] md:w-[420px] md:h-[290px] lg:w-[490px] lg:h-[330px] rounded-lg overflow-hidden">
                    <img
                        onClick={() => openModal?.(<ImageModalContent imageUrl={data?.imageUrl} />)}
                        src={data?.imageUrl}
                        alt="Projects Image"
                        className="h-full w-full object-cover hover:bg-black hover:opacity-50 cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-110"/>
                </div>

                <div className="flex justify-between items-center mt-5 ">
                    <div className="flex flex-col gap-3">
                        <FontSizeContainer size="xl" additionalClass="text-gray-900 ">
                            {data?.title}
                        </FontSizeContainer>
                        <FontSizeContainer size="sm" additionalClass="text-gray-600 font-light">
                            {data?.shortDescription}
                        </FontSizeContainer>
                    </div>
                    <div>
                        <RoundedButton onClick={() => openModal?.(<ModalProject data={data} />)}>
                            <ArrowSvg sizeClass="h-6 w-6"/>
                        </RoundedButton>
                    </div>
                </div>
            </div>
        </TransparentCard>
    );
}