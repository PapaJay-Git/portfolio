const ImageContent = ({imageUrl, additionalClasses = ''}) => {

    return (<img src={imageUrl} alt="Image Content" className={"h-full w-full object-cover bg-black" + additionalClasses}/>);
};

export default ImageContent;