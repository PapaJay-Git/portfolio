const SocialMediaButton = ({ url, imagePath, alt}) => {

    return (
        <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="border-2 border-white rounded-full h-10 w-10 flex items-center justify-center overflow-hidden hover:-translate-y-[1px]">
        <img src={imagePath} alt={alt}/>
    </a>);
};

export default SocialMediaButton;
