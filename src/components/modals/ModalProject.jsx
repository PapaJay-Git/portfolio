import ImageContent from "../visuals/ImageContent";
import FontSizeContainer from "../texts/FontSizeContainer";

export default function ModalProject({data}){

    return (
        <div className="grid grid-cols-12 p-4">
            <div className="col-span-12 xl:col-span-6">
                <ImageContent imageUrl={data?.imageUrl} />
            </div>
            <div className="col-span-12 xl:col-span-6 text-gray-600 xl:ps-5 mt-3">
                <FontSizeContainer size="lg">
                        {data?.title}
                </FontSizeContainer>
                <FontSizeContainer size="sm" additionalClass="my-5 font-thin">
                        {data?.description}
                </FontSizeContainer>
                <FontSizeContainer size="sm" additionalClass="font-thin">
                        {data?.technologies}
                </FontSizeContainer>
            </div>
        </div>
    );
} 