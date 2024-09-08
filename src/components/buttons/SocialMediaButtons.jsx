import SocialMediaButton from "./SocialMediaButton";

export default function SocialMediaButtons() {
    return (
        <span className="flex flex-row gap-2">
            <SocialMediaButton
                url="https://www.facebook.com/jc.mayo.main"
                imagePath="/src/assets/svgs/facebook.svg"
                alt="Facebook Icon"/>
            <SocialMediaButton
                url="https://www.instagram.com/papajay____/"
                imagePath="/src/assets/svgs/instagram.svg"
                alt="instagram Icon"/>
            <SocialMediaButton
                url="https://www.linkedin.com/in/jayson-c-784746321/"
                imagePath="/src/assets/svgs/linkedin.svg"
                alt="linkedin Icon"/>
        </span>
    );
}